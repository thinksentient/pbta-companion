import React, { useState } from "react";
import { HEADINGS as H, getCampaignKeyFromUrl } from "./../data";
import { Row, Col, Badge, Button, Card } from "antd";
import { useLocation, Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faFistRaised,
  faSquare,
  faCheckSquare,
  faCloudMoon,
} from "@fortawesome/pro-solid-svg-icons";
import moves from "./../data/moves";
import { Move } from "./Move";
import { epyllionPlaybooks } from "../data/playbooks";
import { epyllionHouses } from "../data/houses";

export const HeaderCharacter = ({ character }) => {
  const location = useLocation();
  let { campaignKey } = useParams();

  //	Hack around params not being parsed?
  if (!campaignKey) {
    campaignKey = getCampaignKeyFromUrl(location.pathname);
  }

  const house = epyllionHouses[character[H.HOUSE]] || {};

  return (
    <div className="character">
      <Link
        to={{
          pathname:
            "/" +
            campaignKey +
            "/character/" +
            encodeURI(character[H.NAME]) +
            "/" +
            encodeURI(character[H.CHARACTER_NAME]) +
            "/",
        }}
      >
        <div className="name">
          <span className="dragon">{character[H.CHARACTER_NAME]}</span>
          <span className="player">({character[H.NAME]})</span>
          <span className="level">
            {house.name} | {character[H.VIRTUE]}
          </span>
        </div>
        <div className="stats">
          <span>
            <FontAwesomeIcon size="lg" icon={faHeart} />{" "}
            {character[H.CURRENT_CHARM]}
          </span>
          <span>
            <FontAwesomeIcon size="lg" icon={faFistRaised} />{" "}
            {character[H.CURRENT_COURAGE]}
          </span>
          <span>
            <FontAwesomeIcon size="lg" icon={faEye} />{" "}
            {character[H.CURRENT_CUNNING]}
          </span>
        </div>
      </Link>
    </div>
  );
};

export const Character = ({ data, config }) => {
  const system = config[H.SYSTEM];

  const xp = data[H.XP];
  const level = data[H.LEVEL];

  const currentXP = system.getCurrentXP(xp, level);
  const { levelName, steps } = system.getLlevelInfo(data[H.LEVEL]);

  const [showPlaybookDescription, setShowPlaybookDescription] = useState(false);

  const playbook = epyllionPlaybooks[data[H.PLAYBOOOK]];
  const obligation =
    (playbook &&
      playbook.houseObligation &&
      playbook.houseObligation[data[H.HOUSE]]) ||
    "";
  const description = playbook && playbook.description;

  const house = epyllionHouses[data[H.HOUSE]] || {};

  const showAll = false;

  const selected = [
    data[H.PLAYBOOK_BASE_MOVE][0],
    data[H.PLAYBOOK_MOVE_1][0],
    data[H.PLAYBOOK_MOVE_2][0],
    data[H.PLAYBOOK_MOVE_3][0],
  ];
  const selectedData = {
    [data[H.PLAYBOOK_BASE_MOVE][0]]: data[H.PLAYBOOK_BASE_MOVE],
    [data[H.PLAYBOOK_MOVE_1][0]]: data[H.PLAYBOOK_MOVE_1],
    [data[H.PLAYBOOK_MOVE_2][0]]: data[H.PLAYBOOK_MOVE_2],
    [data[H.PLAYBOOK_MOVE_3][0]]: data[H.PLAYBOOK_MOVE_3],
  };

  console.log(selected);

  let icons = [];
  for (let i = 0; i < steps; i++) {
    if (i < currentXP % steps || (currentXP % steps === 0 && currentXP > 0)) {
      icons.push(
        <FontAwesomeIcon icon={faCheckSquare} size="2x" key={"xp_" + i} />
      );
    } else {
      icons.push(<FontAwesomeIcon icon={faSquare} size="2x" key={"xp_" + i} />);
    }
  }

  return (
    <div className="character">
      <Row gutter={16}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 10 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
          <h2>
            {data[H.CHARACTER_NAME]}
            <span>{data[H.NAME]}</span>
          </h2>

          <CharacterAttributes
            charm={[data[H.CHARM], data[H.CURRENT_CHARM]]}
            courage={[data[H.COURAGE], data[H.CURRENT_COURAGE]]}
            cunning={[data[H.CUNNING], data[H.CURRENT_CUNNING]]}
          />

          <CharacterShadows
            anger={data[H.SHADOW_ANGER]}
            doubt={data[H.SHADOW_DOUBT]}
            fear={data[H.SHADOW_FEAR]}
            shame={data[H.SHADOW_SHAME]}
          />

          <h3>
            <span>
              {house.name}
              <span>House</span>
            </span>
          </h3>
          <p className="textCenter">
            <b>Obligation:</b> {obligation}
          </p>

          <h3>
            <span>
              {data[H.VIRTUE]}
              <span>Virtue</span>
            </span>
          </h3>
          <p className="textCenter">
            Grant gems to others when they display your virtue.
          </p>

          <h3>Moons</h3>

          <div className="moons">
            <ul>
              {data[H.VOID_MOON] && <li>Void Moon</li>}
              {data[H.LIBERTY_MOON] && <li>Liberty Moon</li>}
              {data[H.STONE_MOON] && <li>Stone Moon</li>}
              {data[H.SPIRIT_MOON] && <li>Spirit Moon</li>}
              {data[H.STORM_MOON] && <li>Storm Moon</li>}
            </ul>
          </div>

          <div className="level">
            <h3>
              <span>
                {levelName}
                <span>Age &amp; Experience</span>
              </span>
            </h3>

            <div style={{ textAlign: "center", lineHeight: "1.5em" }}>
              <div className="xp">{icons}</div>
            </div>
          </div>

          <h3>Description</h3>

          {data[H.COLOUR] && (
            <p style={{ textAlign: "center" }}>
              Colour: <span>{data[H.COLOUR]}</span>
            </p>
          )}
          {data[H.HEAD] && (
            <p style={{ textAlign: "center" }}>
              Look: <br />
              <span>{data[H.HEAD]}</span>, <span>{data[H.BODY]}</span>,{" "}
              <span>{data[H.MOUTH]}</span>, <span>{data[H.TAIL]}</span>,{" "}
              <span>{data[H.FEET]}</span>, <span>{data[H.PHYSIQUE]}</span>.
            </p>
          )}

          <h3>Fellowships</h3>

		  {data[H.FELLOWSHIP_1] && <p>{playbook.fellowships[0].replace('CHARACTER', data[H.FELLOWSHIP_1])}</p>}

		  {data[H.FELLOWSHIP_2] && <p>{playbook.fellowships[1].replace('CHARACTER', data[H.FELLOWSHIP_2])}</p>}

		  {data[H.FELLOWSHIP_3] && <p>{playbook.fellowships[2].replace('CHARACTER', data[H.FELLOWSHIP_3])}</p>}

        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 14 }}
          lg={{ span: 16 }}
          xl={{ span: 18 }}
        >
          <div className="playbook">
            <h3>{playbook.name}</h3>
            <p className="textCenter">
              <Button
                size="small"
                onClick={() => {
                  setShowPlaybookDescription(!showPlaybookDescription);
                }}
              >
                {showPlaybookDescription ? "Hide" : "Show"} Description
              </Button>
            </p>
            {showPlaybookDescription && <div>{description}</div>}
          </div>

          <h3>Moves</h3>
          <div className="moves">
            {moves
              //	hide DM moves
              .filter(
                (m) => !m.playbook || (m.playbook && !m.playbook.match(/\/DM$/))
              )
              //	Show base moves and chosen ones
              .filter(
                (m) =>
                  !m.playbook ||
                  showAll ||
                  console.log(m.id) ||
                  selected.indexOf(m.id) !== -1
              )
              .map((m) => {
                const moveExtra = selectedData[m.id] ?? [];
                const description =
                  typeof m.description === "function"
                    ? m.description(moveExtra)
                    : m.description;
                return (
                  <Move
                    key={m.id}
                    title={m.title}
                    name={data[H.CHARACTER_NAME]}
                    privateWebhook={data[H.DISCORD_PRIVATE_WEBHOOK]}
                    webhook={config[H.DISCORD_WEBHOOK]}
                    className={
                      "move" +
                      (m.primary ? " playbookMove" : "") +
                      (!m.primary && m.playbook ? " playbookSecondaryMove" : "")
                    }
                    roll={{
                      value:
                        m.roll &&
                        m.roll.stat &&
                        data[H["CURRENT_" + m.roll.stat.name.toUpperCase()]],
                      ...m.roll,
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    ></div>
                  </Move>
                );
              })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

function getAttributeIcon(name) {
  switch (name) {
    case "Charm":
      return faHeart;
    case "Courage":
      return faFistRaised;
    case "Cunning":
      return faEye;
    default:
      console.error("Unrecognized attribute");
      return null;
  }
}

const CharacterAttribute = ({ name, current, extra }) => {
  const icon = getAttributeIcon(name);

  return (
    <div className="attribute">
      <Badge count={extra}>
        <span>{current}</span>
      </Badge>
      <span>
        <FontAwesomeIcon size="lg" icon={icon} /> {name}
      </span>
    </div>
  );
};

const CharacterAttributes = ({ charm, courage, cunning }) => {
  return (
    <div className="attributes">
      <CharacterAttribute name="Charm" current={charm[1]} extra={charm[0]} />
      <CharacterAttribute
        name="Courage"
        current={courage[1]}
        extra={courage[0]}
      />
      <CharacterAttribute
        name="Cunning"
        current={cunning[1]}
        extra={cunning[0]}
      />
    </div>
  );
};

const CharacterShadows = ({ anger, doubt, shame, fear }) => {
  const [help, setHelp] = useState(null);
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };

  console.log("///", help, !help);

  return (
    <div>
      <h3>
        <FontAwesomeIcon size="lg" icon={faCloudMoon} /> Shadows
      </h3>

      <Card style={{ marginBottom: "1rem" }}>
        <Card.Grid
          style={{
            ...gridStyle,
            backgroundColor: help === "anger" ? "#ccc" : null,
          }}
          onClick={() => setHelp(help !== "anger" ? "anger" : null)}
        >
          <FontAwesomeIcon
            size="lg"
            icon={anger === 1 ? faCheckSquare : faSquare}
          />{" "}
          <span>Anger</span>
        </Card.Grid>
        <Card.Grid
          style={{
            ...gridStyle,
            backgroundColor: help === "shame" ? "#ccc" : null,
          }}
          onClick={() => setHelp(help !== "shame" ? "shame" : null)}
        >
          <FontAwesomeIcon
            size="lg"
            icon={shame === 1 ? faCheckSquare : faSquare}
          />{" "}
          <span>Shame</span>
        </Card.Grid>
        <Card.Grid
          style={{
            ...gridStyle,
            backgroundColor: help === "doubt" ? "#ccc" : null,
          }}
          onClick={() => setHelp(help !== "doubt" ? "doubt" : null)}
        >
          <FontAwesomeIcon
            size="lg"
            icon={doubt === 1 ? faCheckSquare : faSquare}
          />{" "}
          <span>Doubt</span>
        </Card.Grid>
        <Card.Grid
          style={{
            ...gridStyle,
            backgroundColor: help === "fear" ? "#ccc" : null,
          }}
          onClick={() => setHelp(help !== "fear" ? "fear" : null)}
        >
          <FontAwesomeIcon
            size="lg"
            icon={fear === 1 ? faCheckSquare : faSquare}
          />{" "}
          <span>Fear</span>
        </Card.Grid>
      </Card>

      {help && <p>Consequences:</p>}
      {help === "anger" && (
        <ul>
          <li>Lash out at a friend.</li>
          <li>Break something valuable</li>
          <li>Escalate a delicate situation</li>
        </ul>
      )}

      {help === "shame" && (
        <ul>
          <li>Blame a friend for your mistakes</li>
          <li>Mock or belittle someone vulnerable</li>
          <li>Seek isolation or solitude</li>
        </ul>
      )}

      {help === "doubt" && (
        <ul>
          <li>Question a friend’s loyalty</li>
          <li>Steal something valuable</li>
          <li>Reject a tradition of Dragonia</li>
        </ul>
      )}

      {help === "fear" && (
        <ul>
          <li>Hide something from your friends</li>
          <li>Avoid a difficult task</li>
          <li>Exaggerate the danger of the situation</li>
        </ul>
      )}
    </div>
  );
};
