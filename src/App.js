import React, {useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDebounce } from 'use-debounce';
import { pokeContext } from './context/pokecontext';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [value, setValue] = useState('');
  const [lastPoke, setLastPoke] = useState({});
  const [pokeValue] = useDebounce(value, 2000);
  const [pokemon, setPokemon] = useState([]);

  const searchPokemon = (value) =>{
    setValue(value)
  }

  useEffect(() => {
    async function fetchPoke() {
      if(pokeValue.length > 0){
        if(pokemon.length === 0 || pokemon.every((pokeInfo) => pokeInfo.name.toLowerCase() !== pokeValue.toLowerCase())){
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeValue.toLowerCase()}`);
            const json = res.data;
            const pokeName = json.name.charAt(0).toUpperCase() + json.name.slice(1);
            const poke = {
              'name': pokeName,
              'number': json.id,
              'type': json.types[0].type.name.charAt(0).toUpperCase() + json.types[0].type.name.slice(1),
              'picture': json.sprites.versions['generation-v']['black-white'].animated.front_default || json.sprites.front_default
            }
            setPokemon([...pokemon, poke])
            setLastPoke(poke)
          } catch (error) {
            console.log('error', error)
          }
        }else{
          alert('This pokémon is already captured!')
        }
      }
    }
    fetchPoke();
  }, [pokeValue])

  const pokeObj = {
    pokemon,
    lastPoke,
    searchPokemon
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          {/* Siempre hay que poner value para el context */}
          <pokeContext.Provider value={pokeObj}>
            <Main/>
          </pokeContext.Provider>
        <Footer/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
