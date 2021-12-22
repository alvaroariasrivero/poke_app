import React from "react";
import './Card.css';

const Card = ({pokemon}) => {
  const {name,number, type, picture} = pokemon
  return <div className="box">
    <div>
    <p>Name: {name}</p>
    <p>Number: {number}</p>
    <p>Type: {type}</p>
    </div>
    <img src={picture} alt={name} className='picture'/>
  </div>;
};

export default Card;
