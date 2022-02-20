
import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'


export const Header = () => {
  return( <div className="header__container">

    <div className="img__container">

      <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcb0yL8KdS3lxlB7w7kD6GfBTivnVVTfpiW0ZQTi6nvwWZIEpS5rU5iFeO_kJxGzEDnOaLx7iq0zM3FJc5e1gGqEGcaCkNotiOAl.png?r=d7f" alt="Rick and morty"></img>

    </div>

  <header className="header">
        
        <NavLink className="nav" to="/">Home</NavLink>
        <NavLink className="nav" to="/characters">Characters</NavLink>
        <NavLink className="nav" to="/locations">Locations</NavLink>
        <NavLink className="nav" to="/search">Search</NavLink>
       

        


  </header>
  </div>);
};
