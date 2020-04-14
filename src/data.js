import { epyllionPlaybooks } from "./data/playbooks";
import { getSystemConfig } from "./data/system";
import { notification } from "antd";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";
// import "firebase/firestore";

export const HEADINGS = {
  // Config data

  SYSTEM: "System",
  DISCORD_WEBHOOK: "Game Discord Webhook",
  LOCATIONS: "Locations",

  //	Generic data
  NAME: "Name",
  CHARACTER_NAME: "Character Name",
  PLAYBOOOK: "Playboook",
  XP: "XP",
  LEVEL: "Level",
  DISCORD_PRIVATE_WEBHOOK: "Discord Webhook",

  //	Stats
  CURRENT_CHARM: "Current Charm",
  CURRENT_COURAGE: "Current Courage",
  CURRENT_CUNNING: "Current Cunning",
  CURRENT_MOONS: "Current Moons",
  CURRENT_SHADOWS: "Current Shadows",
  CURRENT_TOMES: "Tomes",
  CHARM: "Charm",
  COURAGE: "Courage",
  CUNNING: "Cunning",

  //	Epyllion
  VIRTUE: "Virtue",
  GEMS: "Gems",
  HOARD: "Hoard",
  INVENTORY: "Inventory",
  HOUSE: "House",
  PLAYBOOK_BASE_MOVE: "Playbook Base Move",
  PLAYBOOK_MOVE_1: "Playbook Move 1",
  PLAYBOOK_MOVE_2: "Playbook Move 2",
  PLAYBOOK_MOVE_3: "Playbook Move 3",
  ALT_PLAYBOOK_MOVE: "Alt Playbook Move",

  VOID_MOON: "Void Moon",
  LIBERTY_MOON: "Liberty Moon",
  STONE_MOON: "Stone Moon",
  SPIRIT_MOON: "Spirit Moon",
  STORM_MOON: "Storm Moon",
  COLOUR: "Colour",
  HEAD: "Head",
  BODY: "Body",
  MOUTH: "Mouth",
  TAIL: "Tail",
  FEET: "Feet",
  PHYSIQUE: "Physique",
  FELLOWSHIP_1: "Fellowship 1",
  FELLOWSHIP_2: "Fellowship 2",
  FELLOWSHIP_3: "Fellowship 3",
  SIG_MOVE_1: "Sig Move 1",
  SIG_MOVE_2: "Sig Move 2",
  SIG_MOVE_3: "Sig Move 3",
  SIG_MOVE_4: "Sig Move 4",
  HOUSE_RITUAL: "House Ritual",
  HOUSE_STRONGHOLD: "House Stronghold",
  FINAL_FORM: "Final Form",
  SHADOW_ANGER: "Shadow Anger",
  SHADOW_DOUBT: "Shadow Doubt",
  SHADOW_SHAME: "Shadow Shame",
  SHADOW_FEAR: "Shadow Fear"
};

const parse = require("csv-parse/lib/sync");

export const getCampaignKeyFromUrl = pathname => {
  const match = pathname.match(/^\/([a-z0-9-]+)/i);
  return match && match[1];
};

export const fetchData = async campaignKey => {
  const defaultData = {
    system: null,
    characters: [],
    config: {}
  };

  if (!campaignKey) {
    return defaultData;
  }

  let csvResponse;

  try {
    csvResponse = await fetch(
      "https://docs.google.com/spreadsheets/d/" +
        campaignKey +
        "/export?format=csv"
    );
  } catch (err) {
    console.error("FETCH CSV ERROR", err);
    notification.error({
      message:
        "Unable to access the spreadsheet. Check spreadsheet exists and read permissions are granted.",
      duration: 0
    });
    return defaultData;
  }

  //	Split character data from general config
  const csv = await (await csvResponse.text()).split("---");

  let characterData, campaignData;
  const config = {};

  try {
    campaignData = await parse(csv[0], {
      // columns: true,
      trim: true,
      skip_empty_lines: true,
      relax_column_count: true,
      skip_lines_with_empty_values: true
    });

    characterData = await parse(csv[1], {
      columns: true,
      skip_empty_lines: true
    });
  } catch (err) {
    console.error("PARSE CSV ERROR", err);
    notification.error({
      message: "There was an error while parsing the spreadsheet.",
      duration: 0
    });
    return defaultData;
  }

  campaignData.forEach(item => {
    config[item[0]] = item[2];
  });

  console.log(">>>", characterData);

  let system;

  const hasData = characterData && Array.isArray(characterData);

  if (!hasData) {
    notification.error({
      message:
        'The spreadsheet has to have at minimum: the System field filled in and a "---" divider line.',
      duration: 0
    });
    return defaultData;
  }

  system = config[HEADINGS.SYSTEM] = getSystemConfig(
    String(config[HEADINGS.SYSTEM]).toLowerCase()
  );

  //	Cleanup
  characterData.forEach(d => {
    //	Convert playbook to full playbook ID
    d[HEADINGS.PLAYBOOOK] =
      system.id +
      "/" +
      d[HEADINGS.PLAYBOOOK]
        .toLowerCase()
        .replace(" ", "-")
        .replace("/[^0-9a-z]/");
    const playbook = epyllionPlaybooks[d[HEADINGS.PLAYBOOOK]];

    d[HEADINGS.HOUSE] =
      system.id + "/" + d[HEADINGS.HOUSE].trim().toLowerCase();
    d[HEADINGS.XP] = parseInt(d[HEADINGS.XP], 10);
    d[HEADINGS.LEVEL] = parseInt(d[HEADINGS.LEVEL], 10);

    //	Base Stats
    //	@todo: these should be automatic based on the system,
    //	not hardcoded for Epyllion
    d[HEADINGS.CURRENT_CHARM] =
      playbook.baseStats["epyllion/charm"] + parseInt(d[HEADINGS.CHARM], 10);
    d[HEADINGS.CURRENT_COURAGE] =
      playbook.baseStats["epyllion/courage"] +
      parseInt(d[HEADINGS.COURAGE], 10);
    d[HEADINGS.CURRENT_CUNNING] =
      playbook.baseStats["epyllion/cunning"] +
      parseInt(d[HEADINGS.CUNNING], 10);

    d[HEADINGS.CURRENT_SHADOWS] = 0;
    d[HEADINGS.SHADOW_ANGER] = parseInt(d[HEADINGS.SHADOW_ANGER], 10);
    d[HEADINGS.SHADOW_DOUBT] = parseInt(d[HEADINGS.SHADOW_DOUBT], 10);
    d[HEADINGS.SHADOW_SHAME] = parseInt(d[HEADINGS.SHADOW_SHAME], 10);
    d[HEADINGS.SHADOW_FEAR] = parseInt(d[HEADINGS.SHADOW_FEAR], 10);

    if (d[HEADINGS.SHADOW_ANGER]) {
      d[HEADINGS.CURRENT_SHADOWS] += 1;
    }
    if (d[HEADINGS.SHADOW_DOUBT]) {
      d[HEADINGS.CURRENT_SHADOWS] += 1;
    }
    if (d[HEADINGS.SHADOW_SHAME]) {
      d[HEADINGS.CURRENT_SHADOWS] += 1;
    }
    if (d[HEADINGS.SHADOW_FEAR]) {
      d[HEADINGS.CURRENT_SHADOWS] += 1;
    }

	//	Convert to a count
	const gems = String(d[HEADINGS.GEMS]).split(',');
	const gemList = {};
	gems.forEach(k => {
		gemList[k] = gemList[k] ? gemList[k] + 1 : 1;
	})
	d[HEADINGS.GEMS] = gemList;

    d[HEADINGS.CURRENT_MOONS] = 0;

    if (d[HEADINGS.LEVEL] > 2) {
      d[HEADINGS.CURRENT_MOONS] += 1;
    }
    if (d[HEADINGS.LEVEL] > 3) {
      d[HEADINGS.CURRENT_MOONS] += 1;
    }
    if (d[HEADINGS.LEVEL] > 4) {
      d[HEADINGS.CURRENT_MOONS] += 1;
    }

    d[HEADINGS.CURRENT_TOMES] = parseInt(d[HEADINGS.CURRENT_TOMES], 10);

    d[HEADINGS.PLAYBOOK_BASE_MOVE] = String(
      d[HEADINGS.PLAYBOOK_BASE_MOVE]
    ).split("|");
    d[HEADINGS.PLAYBOOK_BASE_MOVE][0] =
      system.id +
      "/" +
      d[HEADINGS.PLAYBOOK_BASE_MOVE][0].toLowerCase().replace(/ /gi, "-");
    d[HEADINGS.PLAYBOOK_MOVE_1] = String(d[HEADINGS.PLAYBOOK_MOVE_1]).split(
      "|"
    );
    d[HEADINGS.PLAYBOOK_MOVE_1][0] =
      system.id +
      "/" +
      d[HEADINGS.PLAYBOOK_MOVE_1][0].toLowerCase().replace(/ /gi, "-");
    d[HEADINGS.PLAYBOOK_MOVE_2] = String(d[HEADINGS.PLAYBOOK_MOVE_2]).split(
      "|"
    );
    d[HEADINGS.PLAYBOOK_MOVE_2][0] =
      system.id +
      "/" +
      d[HEADINGS.PLAYBOOK_MOVE_2][0].toLowerCase().replace(/ /gi, "-");
    d[HEADINGS.PLAYBOOK_MOVE_3] = String(d[HEADINGS.PLAYBOOK_MOVE_3]).split(
      "|"
    );
    d[HEADINGS.PLAYBOOK_MOVE_3][0] =
      system.id +
      "/" +
      d[HEADINGS.PLAYBOOK_MOVE_3][0].toLowerCase().replace(/ /gi, "-");
  });

  return {
    ...defaultData,
    config: config,
    characters: characterData
  };
};
