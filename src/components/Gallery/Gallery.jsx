import React from 'react';
import './Gallery.css'

export default function Gallery ({list}) {
  return <div className="gallery___container">
      {list.map(item => <figure className="gallery__container" key={item.id}>
      <figcaption className="gallery__container-2">
               <p className="gallery__1">{item.name}</p> 
            
          <img className="gallery__img" src={item.image} alt={item.name}/>
          </figcaption>

     
     
     
     
      </figure>)}
      
  </div>;
};
