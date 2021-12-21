import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from "react";
// import Form from './components/Form/Form';
// import ListaPokemon from './components/ListaPokemon/ListaPokemon';
import Main from './components/Main'
import { useDebounce } from 'use-debounce';
import { pokeContext } from './context/pokecontext';

function App() {

  const [value, setValue] = useState('');
  const [pokeValue] = useDebounce(value, 2000);
  const [pokemon, setPokemon] = useState([]);

  const searchPokemon = (value) =>{
    setValue(value)
  }

  useEffect(() => {
    async function fetchPoke() {
      if(pokeValue.length > 0){
        if(pokemon.length === 0 || pokemon.every((pokeInfo) => pokeInfo.name !== pokeValue)){
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeValue.toLowerCase()}`);
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
      }
    }
    fetchPoke();
  }, [pokeValue])

  const pokeObj = {
    pokemon,
    searchPokemon
  }

  return (
    <div className="App">
      {/* Siempre hay que poner value para el context */}
      <pokeContext.Provider value={pokeObj}>
        <Main/>
      </pokeContext.Provider>

    </div>
  );
}

export default App;
