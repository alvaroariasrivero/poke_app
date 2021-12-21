import React, { useContext } from "react";
import { pokeContext } from '../../context/pokecontext';

const Form = () => {
  
  const {searchPokemon} = useContext(pokeContext);

  const handleChange = e => {
    e.preventDefault();
    searchPokemon(e.target.value)
    // document.getElementById('pokedex').reset()
  }

  return <div>
    <form id="pokedex">
      <label htmlFor="pokename">PokeName: </label>
      {/* El onchange va en el input porque es el capo que selecciono */}
      <input onChange={handleChange} type="text" name="pokename"/> 
      {/* <input type="submit" value={'Search'}/> */}
  </form>
  </div>
};

export default Form;
