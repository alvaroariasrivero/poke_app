import React from "react";

const Card = ({pokemon}) => {
  const {name, picture} = pokemon
  return <div>
    <p>Name: {name}</p>
    <img src={picture} alt={name} />
  </div>;
};

export default Card;
