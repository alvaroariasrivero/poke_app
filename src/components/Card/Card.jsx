import React from "react";

const Card = ({pokemon}) => {
  return <div>
    <p>Name: {pokemon.name}</p>
    <img src={pokemon.picture} alt={pokemon.name} />
  </div>;
};

export default Card;
