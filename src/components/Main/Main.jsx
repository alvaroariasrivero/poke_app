import React from "react";
import {Routes, Route} from 'react-router-dom';
import Form from '../Form/Form';
import ListaPokemon from '../ListaPokemon/ListaPokemon';
import Create from '../Create/Create';


const Main = () => {
  
  return <main>
      <Routes>
        <Route path='/' element={<ListaPokemon/>} exact/>
        <Route path='/list' element={<ListaPokemon/>}/>
        <Route path='/search' element={<Form/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </main>;
};      

export default Main;
