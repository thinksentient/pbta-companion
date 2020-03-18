import { epyllionStats } from "./stats";

/*
{
	id:
	title - the move name
	description - html description
	primary - 
} 
*/

export const epyllionBaseMoves = [
  {
    id: "epyllion/act-despite-danger",
    title: "Act Despite Danger",
    description: `<b>10+</b> - you succeed despite the odds
		<br />
		<b>7-9</b> - you fumble, stumble, or embarrass yourself (a worse
		outcome, hard bargain, or ugly choice)`,
    roll: { stat: epyllionStats["epyllion/courage"] }
  },
  {
    id: "epyllion/mislead-or-trick",
    title: "Mislead or Trick",
    description: `<b>10+</b> - you learn a valuable secret and create an opportunity
		OR you confuse them for some time
		<br />
		<b>7-9</b> - you learn a valuable secret or create an opportunity`,
    roll: { stat: epyllionStats["epyllion/cunning"] }
  },
  {
    id: "epyllion/help-or-hinder",
    title: "Help or Hinder",
    description: `<b>10+</b> - you add +1 or -2 to their roll
		<br />
		<b>7-9</b> - you expose yourself to cost, complication, or harm
		<br />
		&nbsp;
		<br />
		<i>Not applicable while calling upon the moons.</i>`,
    roll: { gem: true, maxValue: 3 }
  },
  {
    id: "epyllion/stand-up-to-an-older-dragon",
    title: "Stand Up to an Older Dragon",
    description: `<b>10+</b> - they acknowledge your worth and address your
		concerns; pick one:
		<br />
		<ul>
		  <li>
			You delight them; they give you a useful item or fancy gift.
		  </li>
		  <li>
			You impress them; they offer you a favor or accommodation.
		  </li>
		  <li>
			You intrigue them; they tell you something useful and
			interesting
		  </li>
		</ul>
		<b>7-9</b> - pick one:
		<ul>
		  <li>You succumb to vanity. Mark a Shadow.</li>
		  <li>You embarrass a friend. Return a friendship gem.</li>
		  <li>You overstep social bounds. You incur an obligation.</li>
		</ul>`,
    roll: { stat: epyllionStats["epyllion/courage"] }
  },
  {
    id: "epyllion/study-another-dragon",
    title: "Study Another Dragon",
    description: `<b>10+</b> - ask 2<br />
		<b>7-9</b> - ask 1<br />
		<ul>
		  <li>What is your character hoarding?</li>
		  <li>Who are you holding a grudge against?</li>
		  <li>What could I learn from you?</li>
		  <li>What does your character wish I’d do for you?</li>
		  <li>How could I get your dragon to _____?</li>
		</ul>`,
    roll: { stat: epyllionStats["epyllion/charm"] }
  },
  {
    id: "epyllion/moon-magic",
    title: "Moon Magic",
    description: `<b>10+</b> - The magic is exceptionally powerful and within your
		control.
		<br />
		<b>7-9</b> - The magic is exceptionally powerful OR remains within
		your control
		<br />
		<b>Miss</b> - the moons act as they will, without your guidance.`,
    roll: { stat: epyllionStats["epyllion/moons"], gem: true }
  },
  {
    id: "epyllion/convince-a-dragon",
    title: "Convince a Dragon",
    description: `<b>NPCs 10+</b> - they will do it if you offer them a favor, gift,
		or useful information.
		<br />
		<b>NPCs 7-9</b> - they don’t get it quite right or they don’t tell
		you everything you need to know.
		<br />
		<b>PCs 10+</b> - both apply
		<br />
		<b>7-9</b> - pick one:
		<br />
		<ul>
		  <li>if they do it, they mark experience</li>
		  <li>if they don’t do it, they mark a Shadow</li>
		</ul>`,
    roll: { stat: epyllionStats["epyllion/charm"] }
  },
  {
    id: "epyllion/survey-an-ancient-or-arcane-area",
    title: "Survey an Ancient or Arcane Area",
    description: `<b>10+</b> - ask 2<br />
		<b>7-9</b> - ask 1<br />
		<ul>
		  <li>What resources does this place offer?</li>
		  <li>How can I gain access to this place’s secrets?</li>
		  <li>What here harbors Darkness?</li>
		  <li>Who else knows of this place?</li>
		  <li>Are we alone?</li>
		</ul>`,
    roll: { stat: epyllionStats["epyllion/cunning"] }
  },
  {
    id: "epyllion/shadow-magic",
    title: "Shadow Magic",
    description: `<b>10+</b> - you harness the Darkness, casting powerful shadow
		magic.
		<br />
		<b>7-9</b> - you harness that same magic, but it’s powerful—
		almost too powerful.
		<br />
		<b>Miss</b> - the Darkness chooses how the magic manifests,
		without your guidance.`,
    roll: { stat: epyllionStats["epyllion/shadows"] }
  }
];

export const epyllionNatureAdeptMoves = [
  {
    id: "epyllion/wild-speech",
    title: "Wild Speech",
    description: `You share this world with beasts and creatures of the wild. The
		calls of these creatures are a second language to you. You can
		understand and communicate with animals in a basic tongue of the
		land, allowing you to <b>study them</b>, 
		<b>insist they accept your help</b>, and 
		<b>mislead or trick them</b> as if they were dragons.`,
    primary: true,
    roll: null,
    playbook: "epyllion/nature-adept"
  },
  {
    id: "epyllion/master-of-two-worlds",
    title: "Master of Two Worlds",
    description: `When you <b>act despite danger</b> while traveling through the
		wild, roll +Charm instead of +Courage.`,
    primary: false,
    roll: { stat: epyllionStats["epyllion/charm"] },
    playbook: "epyllion/nature-adept"
  },
  {
    id: "epyllion/spirit-guide",
    title: "Spirit Guide",
    description: `A small spirit guide follows you wherever you go, offering aid and
		counsel.
		<br />
		<b>10+</b> - mark experience and take +1 forward if you follow its
		guidance.
		<br />
		<b>7-9</b> - take a +1 forward if you do as it says and mark a
		Shadow if you don’t
		<br />
		<b>Miss</b> - the spirit is insistent; if you ignore its advice,
		it leaves your side until you are able to make amends.`,
    primary: false,
    roll: { stat: epyllionStats["epyllion/charm"] },
    playbook: "epyllion/nature-adept"
  },
  {
    id: "epyllion/beast-of-the-land",
    title: "Beast of the Land",
    description: `Commune with the spirits native to the land
		<br />
		<b>10+</b> - ask 2<br />
		<b>7-9</b> - ask 1<br />
		<ul>
		  <li>How can I nurture this place?</li>
		  <li>What does this place want from us?</li>
		  <li>What last visited this place?</li>
		  <li>What spirits dance here?</li>
		</ul>
		<b>Miss</b> - the spirits are in trouble and need help with a
		ritual of their own.`,
    primary: false,
    roll: { stat: epyllionStats["epyllion/charm"] },
    playbook: "epyllion/nature-adept"
  },
  {
    id: "epyllion/smokescreen",
    title: "Smokescreen",
    description: `When you keep still in natural surroundings, you blend in and are
		nearly invisible. Enemies cannot spot you until you move or speak.`,
    primary: false,
    playbook: "epyllion/nature-adept"
  }
];

export const epyllionAcademicMoves = [
  {
    id: "epyllion/field-of-expertise",
    title: "Field of Expertise",
    description: extra => {
      const items = extra[1] || "";
	  return `<b>Tomes:</b> ${items}<br />&nbsp;<br />
	  When you consult the tomes you carry for information, tell the DM what you find and roll +tomes consulted.<br />
	  <b>10+</b> - the information is accurate and complete; +1 forward to act on the answers.<br />
	  <b>7–9</b> - something is missing or mythic, useful but not everything you need.<br />
	<b>Miss</b> - you’ve got something terribly wrong; the DM will let you know what you got wrong when you need to know.<br />
	`;
    },
    roll: { stat: epyllionStats["epyllion/tomes"] },
    primary: true,
    playbook: "epyllion/academic"
  },
  {
    id: "epyllion/old-debts",
    title: "Old Debts",
    description: `When you stand up to an older dragon by reminding them of
		debts and obligations long forgotten, roll +Cunning instead of +Courage.`,
    rolls: { stat: epyllionStats["epyllion/cunning"] },
    playbook: "epyllion/academic"
  },
  {
    id: "epyllion/an-ear-for-the-arcane",
    title: "An Ear for the Arcane",
    description: `When you listen closely to a magic ritual<br />
		<b>10+</b> - ask 2 & +1 forward to acting on the answers<br />
		<b>7–9</b> - ask 1 & +1 forward to acting on the answers<br />
		<ul>
		<li>What arcane effects does the ritual have?</li>
		<li>How can I disrupt the ritual?</li>
		<li>Who is the intended target?</li>
		<li>How could I reproduce this ritual?</li>
		</ul><br />
		<b>Miss</b> - the ritual ensnares you.<br/>`,
    rolls: { stat: epyllionStats["epyllion/cunning"] },
    playbook: "epyllion/academic"
  },
  {
    id: "epyllion/peer-review",
    title: "Peer Review",
    description: `When you go to your friends for advice about a specific
		problem, give them a Friendship Gem and hear what they have to say. If you follow
		their advice, tell them to mark experience; you get a +1 ongoing to see it through. If
		you ignore their advice, mark a Shadow.`,
    playbook: "epyllion/academic"
  },
  {
    id: "epyllion/familiar-with-the-old-ways",
    title: "Familiar With the Old Ways",
    description: `When you study a Bearded or Elder dragon.<br/>
		<b>10+</b> - ask 2<br />
		<b>7-9</b> - ask 1<br />
		<ul>
		<li>What is your character hoarding?</li>
		<li>Who are you holding a grudge against?</li>
		<li>What could I learn from you?</li>
		<li>What does your character wish I’d do for you?</li>
		<li>How could I get your dragon to _____?</li>
		<li>What is whispered about you within your House?</li>
		<li>How are you vulnerable to the Darkness?</li>
		<li>Who in Dragonia opposes your goals and machinations?</li>
		</ul>`,
    rolls: { stat: epyllionStats["epyllion/charm"] },
    playbook: "epyllion/academic"
  }
];

export const epyllionCrafterMoves = [
  {
    id: "epyllion/dragon-trade",
    title: "Dragon Trade",
    description: (extra) => {
		const items = extra[1] ? extra[1].replace(',', ', ').replace(/, (.*)$/, ' or $1') : '';
      return `
			You are known for your gifts in the draconic arts. When you create something using <b>${items}</b><br />
			<b>10+</b> - pick 2<br />
			<b>7-9</b> - pick 1<br />
			<ul>
			<li>Your creation is durable</li>
			<li>Your creation is functional</li>
			<li>Your creation is attractive</li>
			</ul><br />
			<b>Miss</b> - the work is fundamentally flawed (revealed at later time)`;
    },
    primary: true,
    playbook: "epyllion/crafter",
    roll: { stat: epyllionStats["epyllion/cunning"] },
    items: [
      "paints",
      "wood",
      "stone",
      "pen and ink",
      "mortar",
      "glass",
      "metal",
      "tattoos",
      "piercing",
      "acting",
      "directing",
      "writing",
      "gardening",
      "cloth",
      "paper",
      "plastics",
      "engraving",
      "jewels",
      "precious",
      "metals",
      "ice",
      "wax",
      "clay",
      "sand",
      "beads",
      "wire",
      "sound",
      "instruments"
    ]
  },
  {
    id: "epyllion/an-eye-for-detail",
    title: "An Eye for Detail",
    description: `When you study another dragon after complimenting
		them on a unique feature or object they possess, roll +Cunning instead of +Charm`,
    playbook: "epyllion/crafter",
    roll: { stat: epyllionStats["epyllion/cunning"] }
  },
  {
    id: "epyllion/crafty-claw",
    title: "Crafty Claw",
    description: `When you repair broken equipment or machinery,<br />
		<b>10+</b> - you do it no problem<br />
		<b>7-9</b> - repair at cost<br />
		<b>Miss</b> - something vital is missing or permanently broken`,
    playbook: "epyllion/crafter",
    roll: { stat: epyllionStats["epyllion/cunning"] }
  },
  {
    id: "epyllion/monument-to-the-moons",
    title: "Monument to the Moons",
    description: `When you create (and describe) a work of
		art, you can call upon the Moons and store the effects inside your piece. Name an event that will activate the item, and the magic will be released when it is triggered.`,
    playbook: "epyllion/crafter",
    roll: { stat: epyllionStats["epyllion/moons"] }
  },
  {
    id: "epyllion/saddlebag-of-potential",
    title: "Saddlebag of Potential",
    description: `When you search your saddlebag for something small enough to be carried with you<br />
		<b>10+</b> - you have just the thing, or close enough<br />
		<b>7-9</b> - you have something
		similar, but it’s incomplete or flawed<br />
		<b>Miss</b> - you’ve used it recently, but you
		might be able to get it back`,
	playbook: "epyllion/crafter",
	roll: { stat: epyllionStats["epyllion/cunning"] }
  }
];

export const epyllionDaredevilMoves = [
  {
    id: "epyllion/beast-companion",
    title: "Beast Companion",
    description: (extra) => {
	const type = extra[1] ?? '';
	const description = extra[2] ?? '';
	// @todo: better reference than this
      return `${description}<br />${epyllionDaredevilMoves[0].items[type]}`;
    },
    primary: true,
    playbook: "epyllion/daredevil",
    items: {
      large: "Large: your beast is large enough to ride long distances.",
      tracking: "Tracking: your beast can track down a nearby creature.",
      burrowing: "Burrowing: your beast can dig through solid earth.",
      messenger: "Messenger: your beast can carry messages far and wide.",
      camouflage: "Camouflage: your beast can blend in with its surroundings at will.",
      perform: "Perform: your beast can entertain dragonkin and other wildlife.",
      labor: "Labor: your beast can haul and move heavy objects."
	}
  },
  {
    id: "epyllion/danger-is-my-middle-name",
    title: "Danger is My Middle Name",
    description: `Take +1 ongoing to <b>acting despite danger</b>
	to overcome physical obstacles.`,
    playbook: "epyllion/daredevil",
    roll: { stat: epyllionStats["epyllion/courage"], extra: "+1" }
  },
  {
    id: "epyllion/clear-headed",
    title: "Clear Headed",
    description: `When charging headfirst into danger:<br />
	<b>10+</b> - ask 2<br />
	<b>7-9</b> - ask 1<br />
	+1 forward when acting on answers<br />
	<ul>
	<li>Where’s my best escape route/way in/way past?</li>
	<li>What should I be on the lookout for?</li>
	<li>Who’s in control here?</li>
	</ul>
	<b>Miss</b> - someone gets the jump on you before you can get your bearings, putting you in a tough spot and separating you from your friends.`,
    playbook: "epyllion/daredevil",
    roll: { stat: epyllionStats["epyllion/courage"] }
  },
  {
    id: "epyllion/slippery-scales",
    title: "Slippery Scales",
    description: `When you attempt to escape any form of physical
	entrapment,:<br />
	<b>10+</b> - you escape<br />
	<b>7-9</b> - you escape but leavo something important behind or attract unwanted attention<br />
	<b>Miss</b> - you escape but at great cost, mark a <b>Shadow</b>`,
    playbook: "epyllion/daredevil",
    roll: { stat: epyllionStats["epyllion/courage"] }
  },
  {
    id: "epyllion/share-the-load",
    title: "Share the Load",
    description: `When a fellow dragon is about to mark a Shadow, you
	can mark off a Shadow on your Shadow Track instead. You don’t have to act on the
	Shadow, but it stays marked until you clear your Shadow Track.`,
    playbook: "epyllion/daredevil"
  }
];

export const epyllionMoves = [
  ...epyllionAcademicMoves,
  ...epyllionCrafterMoves,
  ...epyllionDaredevilMoves,
  ...epyllionNatureAdeptMoves,
  ...epyllionBaseMoves
];

export default [...epyllionMoves];
