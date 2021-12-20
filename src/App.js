import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from "react";
import Form from './components/Form/Form';
import ListaPokemon from './components/ListaPokemon/ListaPokemon'

function App() {

  const [value, setValue] = useState('');
  const [pokemon, setPokemon] = useState([]);

  const searchPokemon = (value) =>{
    setValue(value)
  }

  useEffect(() => {
    async function fetchPoke() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;
        const pokeName = json.name.charAt(0).toUpperCase() + json.name.slice(1);
        const poke = {
          'name': pokeName,
          'picture': json.sprites.front_default
        }
        setPokemon([...pokemon, poke])
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchPoke();
  }, [value])

  return (
    <div className="App">
      <Form searchPokemon={searchPokemon} />
      <ListaPokemon pokemon={pokemon}></ListaPokemon>
    </div>
  );
}

export default App;
