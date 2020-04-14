import React, { useState } from "react";
import { Form, Button, Card, Modal, Input, Switch, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faDice } from "@fortawesome/free-solid-svg-icons";
import Roll from "roll";

const dice = new Roll();

export const Move = ({
  title,
  roll,
  name,
  webhook,
  privateWebhook,
  gems,
  ...props
}) => {
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [privateChannel, setPrivateChannel] = useState(false);
  let icon;
  let extra = [];

  if (roll && (roll.stat || roll.gem)) {
    let extraDice = "";

    if (roll.stat) {
      icon = roll.stat.icon;
    }
    if (roll.gem) {
      icon = icon || faGem;
    }

    if (typeof roll.value != "undefined") {
      extraDice = (roll.value >= 0 ? "+" : "") + roll.value;
    }
    if (roll.extra) {
      extraDice += roll.extra;
    }

    const okHandler = e => {
      let values;

      if (e.preventDefault) {
        e.preventDefault();
        values = form.getFieldsValue();
      } else {
        values = e;
      }

      let dicePattern = "2d6" + extraDice;
      if (roll.gem && values.gems) {
        dicePattern += "+" + parseInt(values.gems, 10);
      }

      let r;
      try {
        r = dice.roll(dicePattern);
      } catch (err) {
        console.error("Failed roll", err);
        notification.error({
          message: `Couldn't roll the dice :(`
        });
        return setShowModal(false);
      }

      let message = JSON.stringify({
        content: `> ${name} tried to **${title}** (${dicePattern}).
> And rolled... **${r.result}** (${r.rolled.join(", ")})`
      });

      notification.error({
        message: (
          <span>
            {title}
            <br />
            Rolled... <b>{r.result}</b> ({r.rolled.join(", ")})
          </span>
        ),
        icon: <FontAwesomeIcon icon={faDice} size="x5" fixedWidth />,
        duration: 0
      });

      const destinationWebhook = privateChannel ? privateWebhook : webhook;

      //	If no webhook is set just return as normal
      if (!destinationWebhook) {
        return setShowModal(false);
      }

      fetch(destinationWebhook, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: message
      })
        .then(() => {
          return setShowModal(false);
        })
        .catch(err => {
          console.error(err);
          return setShowModal(false);
        });
    };

    extra = (
      <div>
        <Button
          type="primary"
          size="small"
          key="rollButton"
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon icon={faDice} fixedWidth /> &nbsp; Roll 2d6{" "}
          {extraDice}
          {roll.gem && (
            <span>
              &nbsp;+ <FontAwesomeIcon icon={faGem} fixedWidth />
            </span>
          )}
        </Button>
        <Modal
          title="Make a Move"
          visible={showModal}
          onOk={okHandler}
          onCancel={() => setShowModal(false)}
        >
          <Form form={form} name="rollDiceForm" onFinish={okHandler}>
            <Form.Item label="Destination">
              <Switch
                name="channel"
                onChange={() => {
                  setPrivateChannel(!privateChannel);
                }}
              />{" "}
              Private roll?
            </Form.Item>
            {roll.gem && (
              <Form.Item label="Gems" name="gems" extra={Object.keys(gems).map((k) => (
				<span key={k}>
				  {k}: {gems[k]} &nbsp;
				</span>
			  ))}>

                <Input type="text" />
              </Form.Item>
            )}
          </Form>
        </Modal>
      </div>
    );
  }

  return (
    <Card
      className="move"
      title={
        <div>
          {icon && <FontAwesomeIcon icon={icon} />}
          {icon && " "}
          {title}
        </div>
      }
      extra={extra}
      {...props}
    >
      {props.children}
    </Card>
  );
};
