import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import RutaPrincipal from './Routes/RutaPrincipal';
import CartWidget from './components/CartWidget/CartWidget';


export default function App(){
  

  return (
      
    
       <RutaPrincipal/>
     
   
  );
}


 


