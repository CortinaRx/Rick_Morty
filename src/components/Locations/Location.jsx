import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {GalleryLoc} from '../GalleryLoc/GalleryLoc'
import {PaginationLoc} from '../PaginationLoc/PaginationLoc';
import './Location.css'

export const Locations = () => {
  
  const [locations, setLocations] = useState([]);

  const getLocations = async (newPage = 1) =>{
    const res = await axios("https://rickandmortyapi.com/api/location?page=" + newPage);
    setLocations(res.data.results)
    console.log(setLocations)
  }

  useEffect(getLocations, [])
  
  
  
  
  return <div className="location__container">
    <GalleryLoc list={locations} />
    <PaginationLoc getData={getLocations} />
  </div>;
};

