import React, {useState, useEffect } from "react";
import axios from 'axios';
import Card from "../Card/Card";

const Form = () => {

  const [value, setValue] = useState('');
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPoke() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;
        const pokeName = json.species.name.charAt(0).toUpperCase() + json.species.name.slice(1);
        const poke = {
          'name': pokeName,
          'picture': json.sprites.front_default
        }
        setPokemon(poke)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchPoke();
  })
  
  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.pokename.value)
    document.getElementById('pokedex').reset()
  }

  return <div>
    <form onSubmit={handleSubmit} id="pokedex">
      <label htmlFor="pokename">PokeName: </label>
      <input type="text" name="pokename"/>
      <input type="submit" value={'Search'}/>
  </form>
  <Card pokemon={pokemon}></Card>
  </div>
};

export default Form;
