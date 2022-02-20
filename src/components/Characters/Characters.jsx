import {useState, useEffect} from 'react';
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import './Character.css';


export const Characters = () => {
  
  const [characters, setCharacters] = useState([]);

 const getCharacters = async (newPage = 1) =>{
   const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage);
   setCharacters(res.data.results)
 }
 
 useEffect(getCharacters, [])
 
 
 
 
  return <div className="characters__container">
    <Gallery list={characters}/>
    <Pagination getData={getCharacters}/>
  </div>;
};




  


