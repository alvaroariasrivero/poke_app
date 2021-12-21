import React, { useContext } from "react";
import { pokeContext } from '../../context/pokecontext';
import Card from '../Card/Card'

const ListaPokemon = () => {

  const {pokemon} = useContext(pokeContext);

  const paintCards = () => {
    return pokemon.map((poke, i) => <Card pokemon={poke} key={i}></Card>)
  }

  return <>{paintCards()}</>;
};

export default ListaPokemon;
