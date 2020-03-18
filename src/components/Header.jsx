import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Layout } from "antd";
import { HEADINGS as H, getCampaignKeyFromUrl } from "../data";
import { HeaderCharacter } from "./Character";

export const Header = ({ characters = [] }) => {
  const location = useLocation();
  let { campaignKey } = useParams();

  //	Hack around params not being parsed?
  if (!campaignKey) {
    campaignKey = getCampaignKeyFromUrl(location.pathname);
  }

  //	No header for home
  if (location && location.pathname === "/") {
    return null;
  }

  return (
    <Layout.Header>
      <div className="menuItems">
        <Link to="/">Home</Link>
        <Link to={"/"+campaignKey}>Campaign</Link>
      </div>
	  <div className="characterItems">
      {characters.map(character => (
        <HeaderCharacter
          character={character}
          key={character[H.CHARACTER_NAME] + "_" + character[H.NAME]}
        />
      ))}
	  </div>
    </Layout.Header>
  );
};
