import Login from "./Pages/Login";
import Register from "./Pages/Register";
import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";


import Home from "./Pages/Home";
import CrearPin from "./Pages/CrearPin";
import EditarPin from "./Pages/EditarPin";
import Diverso from "./Pages/Diverso";
import VistaImagen from "./Pages/VistaImagen";
import VistaDiverso from "./Pages/VistaDiverso";
import EditarPerfil from "./Pages/EditarPerfil";
import Perfil from "./Pages/Perfil";
import Tableros from "./Pages/Tableros";
import CrearTablero from "./Pages/CrearTablero";
import TableroVistaContenido from "./components/TableroVistaContenido";


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
          <Route path="/editarpin" element={<EditarPin/>}></Route>
          <Route path="/vistapin" element={<VistaImagen/>}></Route>
          <Route path="/vistadiverso" element={<VistaDiverso/>}></Route>
          <Route path="/editarperfil" element={<EditarPerfil/>}></Route>
          <Route path="/perfil" element={<Perfil/>}></Route>
          <Route path="/tablero" element={<Tableros/>}></Route>
          <Route path="/creartablero" element={<CrearTablero/>}></Route>
          <Route path="/contenidotablero" element={<TableroVistaContenido/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;