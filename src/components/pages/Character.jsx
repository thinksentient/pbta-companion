import React from "react";
import { Character } from "../Character";
import {HEADINGS as H} from './../../data';
import { withRouter } from "react-router-dom";
export const CharacterPage = ({
	match: {
		params: {
			name, pc
		}
	},
	characters,
	config,
	...props
}) => {
	const character = characters.filter(c => c[H.NAME] === name && c[H.CHARACTER_NAME] === pc).pop();
  return (
    <div className="characters">
      {character && <Character data={character} config={config} />}
    </div>
  );
};

export default withRouter(CharacterPage);