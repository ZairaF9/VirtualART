import React from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import Cookies from 'universal-cookie';
import Flores from '../images/flores.jpeg'
import Navbar from './Navbar';


const TableroVistaContenido = () =>{

  useEffect(()=>{
    findPostTablero();
  },[]);

async function findPostTablero(){
    const cookies = new Cookies();
    const response = await fetch('http://localhost:3001/api/tableros/' + cookies.get("ID_Tablero") ,{
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    });
    const tablero = await response.json();

    console.log(tablero);
    const imageControl=document.getElementById("coverImage");
    imageControl.src='http://localhost:3001/api/tableros/imgtablero/' + cookies.get("ID_Tablero");

    const title=document.getElementById("title");
    title.innerHTML=tablero.nombre;
}


return(
    <div>
        <Navbar/>
    <div class="group relative items-center justify-center overflow-hidden ">
    <img id='coverImage' className='w-full h-80 object-cover' src={Flores}/>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 id='title' class="font-dmserif text-3xl font-bold text-white">Naturaleza</h1>
        </div>
    </div>
    <h1>Holaaaa</h1>
    </div>
);
};

export default TableroVistaContenido