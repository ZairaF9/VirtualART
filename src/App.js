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
        <Router>
      <Routes>
          <Route path="*" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/registro" element={<Register/>}></Route>
          <Route path="/diverso" element={<Diverso/>}></Route>
          <Route path="/crearpin" element={<CrearPin/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
