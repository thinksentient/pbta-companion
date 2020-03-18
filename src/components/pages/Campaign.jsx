import React from "react";
import { HEADINGS } from "../../data";
export const CampaignPage = ({ ...props }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Campaign Details</h1>

      {props.config && props.config[HEADINGS.LOCATIONS] && (
        <p>
          <a
            href={props.config[HEADINGS.LOCATIONS]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Locations document
          </a>
        </p>
      )}
    </div>
  );
};
