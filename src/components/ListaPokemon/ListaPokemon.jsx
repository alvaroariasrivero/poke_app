import React, { useContext } from "react";
import { pokeContext } from '../../context/pokecontext';
import Card from '../Card/Card';
import './ListaPokemon.css'

const ListaPokemon = () => {

  const {pokemon} = useContext(pokeContext);

  const paintCards = () => {
    return pokemon.map((poke, i) => <Card pokemon={poke} key={i}></Card>)
  }

  return <div className="lista">{paintCards()}</div>;
};

export default ListaPokemon;
