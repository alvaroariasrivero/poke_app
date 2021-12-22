import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css'
import pokeball from '../../assets/pokeball.png'

const Nav = () => {
  return <div className="cabecera">
            <div className="intro">
              <img src={pokeball} alt="pokeball" className="pokeball"/>
              <h1 className="title">PokéDex</h1>
            </div>
            <nav>
              <ul>
                <li><Link to='/list'>PokéList</Link></li>
                <li><Link to='/search'>PokéSearch</Link></li>
                <li><Link to='/create'>Create Pokémon</Link></li>
              </ul>
            </nav>
          </div>;
};

export default Nav;
