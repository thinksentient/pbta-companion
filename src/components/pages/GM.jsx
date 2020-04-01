import React from "react";
import { HEADINGS } from "../../data";
import { Card, Col, Row, Button } from "antd";
import { faSimplybuilt } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/pro-solid-svg-icons";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const GMPage = ({ ...props }) => {
  const [selectedMove, setSelectedMove] = useState(null);
  let i = 0;
  return (
    <div style={{ padding: "1rem" }}>
      <h1 className="textCenter">GM Info</h1>
      <h2 className="textCenter">GM Moves</h2>

      <p className="textCenter">
        <Button
          type="primary"
          onClick={() => setSelectedMove(randomIntFromInterval(0, 26))}
        >
          <FontAwesomeIcon icon={faDice} />
          &nbsp;Pick Random
        </Button>
      </p>
      <Row gutter={16}>
        <Col sm={{ span: 8 }}>
          <h3>Wildreness Moves</h3>

          <p className="textCenter">
            <Button
              type="primary"
              onClick={() => setSelectedMove(randomIntFromInterval(0, 8))}
            >
              <FontAwesomeIcon icon={faDice} />
              &nbsp;Pick Random
            </Button>
          </p>

          {/* 0-8 */}
          <Card className={selectedMove === i++ && "activeCard"}>
            Put someone in a high-stakes situation
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Reveal a new and fantastic creature
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Awaken something better left sleeping
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Take away one of the clutch’s Things
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Obfuscate the way home
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Unleash chaos, disruptive and unmanageable
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Tempt a dragon with mysteries and ruins
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Present a path or structure for exploration
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Show the roots of Darkness taking hold
          </Card>
        </Col>
        <Col sm={{ span: 8 }}>
          <h3>Culture Moves</h3>

          <p className="textCenter">
            <Button
              type="primary"
              onClick={() => setSelectedMove(randomIntFromInterval(9, 17))}
            >
              <FontAwesomeIcon icon={faDice} />
              &nbsp;Pick Random
            </Button>
          </p>
          {/* 9-17 */}
          <Card className={selectedMove === i++ && "activeCard"}>
            Announce off-screen challenges and conflicts
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Pressure them with competing ideologies
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Turn their move back on them
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Reveal an unpleasant truth
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Charge them with a task or obligation
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Offer an opportunity, with or without a cost
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Tell the consequences and ask
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Lock down an important place
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Show the Darkness feeding on a dragon’s pain
          </Card>
        </Col>
        <Col sm={{ span: 8 }}>
          <h3>Darkness Moves</h3>

          <p className="textCenter">
            <Button
              type="primary"
              onClick={() => setSelectedMove(randomIntFromInterval(18, 26))}
            >
              <FontAwesomeIcon icon={faDice} />
              &nbsp;Pick Random
            </Button>
          </p>
          {/* 18-26 */}
          <Card className={selectedMove === i++ && "activeCard"}>
            Corrupt them with Shadows
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Announce the coming Darkness
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Confront them with corruption
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Reveal the Darkness’s hold on Dragonia
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Demand a meaningful sacrifice
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Bind someone or something to an object
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Put someone in direct and immediate danger
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Activate the clutch’s stuff’s downsides
          </Card>
          <Card className={selectedMove === i++ && "activeCard"}>
            Tempt them with power and promises
          </Card>
        </Col>
      </Row>

      <h2 className="textCenter">Hazards</h2>

      <ul>
        <li>
          Family
          <ul>
            <li>Separation</li>
            <li>Estrangement</li>
            <li>Grief</li>
            <li>Control</li>
          </ul>
        </li>

        <li>
          Friendship
          <ul>
            <li>Jealousy</li>
            <li>Rivalry</li>
            <li>Scarcity</li>
            <li>Insecurity</li>
          </ul>
        </li>

        <li>
          Tradition
          <ul>
            <li>Hierarchy</li>
            <li>Legacy</li>
            <li>Restriction</li>
            <li>Rituals</li>
          </ul>
        </li>
        <li>
          Nature
          <ul>
            <li>Development</li>
            <li>Havoc</li>
            <li>Mystery</li>
            <li>Sanctuary</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
