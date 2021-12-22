import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to='/list'>PokéList</Link></li>
      <li><Link to='/search'>PokéSearch</Link></li>
      <li><Link to='/create'>Create Pokémon</Link></li>
    </ul>
  </nav>;
};

export default Nav;
