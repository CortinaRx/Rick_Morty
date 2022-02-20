import React from "react";
import './Search.css';
import { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [characterName, setCharacterName] = useState("");
  const [character, setCharacter] = useState([]);
  
  const searchCharacter = () =>{
      Axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`).then((res)=>{
          setCharacter(res.data.results)
      })
  }

  console.log(character)
  
  return (<div className="global-search">
  <div className="search">
     
      <input className="search-input" type="text" onChange={(event) =>{setCharacterName(event.target.value)}}/>
      <button className="btn-search" onClick={searchCharacter}>Find Character</button>
  </div>


    <ul className="character-list">
       {character.map(item =>(
           <li className="character-list-li" key={item.id}>
           <p className="character-list-name">{item.name}</p>
           <img className="character-list-img" src={item.image} alt={item.name}/>

           </li>
       ))} 
    </ul>

  {/* </div> */}




  </div>);
};

export default Search;
