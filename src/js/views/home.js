import React, { useEffect } from "react";
import MyCard from "../component/MyCard.js";
import { getList } from "../services/getList.js";


export const Home = () => {
	const [characters, setCharacters] = useState ([]);
	useEffect(()=> {
		getList().then(respuestaJson) => {setCharacters(respuestaJson}}
	)

	return (
		<div className="row">
			{character.map(character => <MyCard name={character.name} uid={character.uid}/>  )}
			 
		</div>
		);
};
