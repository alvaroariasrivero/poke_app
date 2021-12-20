import React, { Fragment } from "react";
import Card from '../Card/Card'

const ListaPokemon = (props) => {

  const paintCards = () => {
    return props.pokemon.map((poke, i) => <Card pokemon={poke} key={i}></Card>)
  }

  return <>{paintCards()}</>;
};

export default ListaPokemon;
