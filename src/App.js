import Login from "./Pages/Login";
import Register from "./Pages/Register";
import React from "react";
import { BrowserRouter as Router,Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CrearPin from "./Pages/CrearPin";
import EditarPin from "./Pages/EditarPin";
import Diverso from "./Pages/Diverso";
import VistaImagen from "./Pages/VistaImagen";
import VistaDiverso from "./Pages/VistaDiverso";
import EditarPerfil from "./Pages/EditarPerfil";


function App() {
  return (
    <div>
        <Login/>
    </div>
  );
}

export default App;
