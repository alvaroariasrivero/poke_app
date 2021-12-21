import React from "react";
import {Routes, Route} from 'react-router-dom';
import Form from '../Form/Form';
import ListaPokemon from '../ListaPokemon/ListaPokemon';


const Main = () => {
  
  return <main>
      <Routes>
        <Route path='/' element={<ListaPokemon/>}/>
        <Route path='/search' element={<Form/>}/>
      </Routes>
    </main>;
};      

export default Main;
