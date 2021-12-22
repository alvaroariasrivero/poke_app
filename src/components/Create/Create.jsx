import React, { useContext, useState } from "react";
import { pokeContext } from '../../context/pokecontext';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import './Create.css'

const Create = () => {

  const { register, handleSubmit } = useForm();
  const {createPoke} = useContext(pokeContext);
  const [page, setPage] = useState(false);

  const onSubmit = data => {
    createPoke(data);
    setPage(true);
  }

  if (page) {
    return <Navigate to='/list' />
   }
  

  return <div className="create">
    <form onSubmit={handleSubmit(onSubmit)} className="createPoke">
      <div>
        <label>Name: <input {...register("name")} minLength='3' required/></label>
      </div>
      <div>
        <label>Number: <input {...register("number")} required/></label>
      </div>
      <div>
        <label>Type: <select required {...register("type")}>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select></label>
      </div>
      <div>
        <label>Picture: <input type="text" {...register("picture")}/></label>
      </div>
      <input type="submit" className="btn-grad"/>
    </form>
  </div>;
};

export default Create;
