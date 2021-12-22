import React from "react";

const Card = ({pokemon}) => {
  const {name,number, type, picture} = pokemon
  return <>
    <p>Name: {name}</p>
    <p>Number: {number}</p>
    <p>Type: {type}</p>
    <img src={picture} alt={name} />
  </>;
};

export default Card;
