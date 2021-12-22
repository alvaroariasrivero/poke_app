import React from "react";
import {Routes, Route} from 'react-router-dom';
import Form from '../Form/Form';
import ListaPokemon from '../ListaPokemon/ListaPokemon';
import Create from '../Create/Create';
import Home from '../Home/Home';
import './Main.css';


const Main = () => {
  
  return <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/list' element={<ListaPokemon/>}/>
        <Route path='/search' element={<Form/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </main>;
};      

export default Main;
