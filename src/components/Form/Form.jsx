import React from "react";

const Form = (props) => {
  
  const handleSubmit = e => {
    e.preventDefault();
    props.searchPokemon(e.target.pokename.value)
    document.getElementById('pokedex').reset()
  }

  return <div>
    <form onSubmit={handleSubmit} id="pokedex">
      <label htmlFor="pokename">PokeName: </label>
      <input type="text" name="pokename"/>
      <input type="submit" value={'Search'}/>
  </form>
  </div>
};

export default Form;
