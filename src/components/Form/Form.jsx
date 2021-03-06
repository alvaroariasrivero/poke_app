import React, { useContext } from "react";
import { pokeContext } from '../../context/pokecontext';
import Card from "../Card/Card";
import './Form.css'

const Form = () => {
  
  const {searchPokemon, lastPoke} = useContext(pokeContext);

  const handleChange = e => {
    e.preventDefault();
    searchPokemon(e.target.value)
    // document.getElementById('pokedex').reset()
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return <div>
    <form id="pokedex" onSubmit={handleSubmit} className="search">
      <label htmlFor="pokename">PokéName: </label>
      {/* El onchange va en el input porque es el capo que selecciono */}
      <input onChange={handleChange} type="text" name="pokename"/> 
      <Card pokemon={lastPoke}/>
  </form>
  </div>
};

export default Form;
