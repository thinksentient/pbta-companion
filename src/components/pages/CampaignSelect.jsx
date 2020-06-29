import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
export const CampaignSelect = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
	window.location.href = "#/" + encodeURIComponent(values.gdocid);
	
	// let x = JSON.stringify({content: 'abc'});
	// fetch('https://discordapp.com/api/webhooks/685286083554050126/4UgyicABfpN2LKBeLzbziz9gvlRuPtWtTb9MZOpKwO3Dg68tP2Czi352PQx4D-VLs1PE', {
	// 	method: 'post',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: x
	//   })
  };

  return (
    <div className="campaignSelect">
      <h1>Select Campaign Spreadsheet</h1>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="gdocid"
          rules={[
            {
              required: true,
              message:
                "Please enter the google spreadsheet ID before proceeding."
            }
          ]}
        >
          <Input placeholder="Spreadsheet ID" />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
		<p className="ant-form-item-extra"><span>
              You can find the ID as part of the spreadsheet URL:
              <br /> e.g. https://docs.google.com/spreadsheets/d/
              <b>SPREADSHEET_ID</b>
            </span></p>
      </Form>
      </div>
  );
};
