import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return <nav>
    <ul>
      <Link to='/'>PokéList</Link>
      <Link to='/search'>PokéSearch</Link>
    </ul>
  </nav>;
};

export default Nav;
