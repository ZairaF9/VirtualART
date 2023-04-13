import React from 'react';
import Navbar from '../components/Navbar';
import Flores from '../images/flores.jpeg'
import VistaContenidoDvs from '../components/ContenidoVistaDiverso.jsx';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { createContext } from 'react';

const VistaDiverso = () =>{

    useEffect(()=>{
        findCategory();
      },[]);

    async function findCategory(){
        const cookies = new Cookies();
        const response = await fetch('http://localhost:3001/api/categories/' + cookies.get("ID_Categoria") ,{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
        });
        const category = await response.json();

        console.log(category);
        const imageControl=document.getElementById("coverImage");
        imageControl.src='http://localhost:3001/api/categories/image/' + cookies.get("ID_Categoria");

        const title=document.getElementById("title");
        title.innerHTML=category.nombre;
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
        <VistaContenidoDvs/>
        </div>
    );
};

export default VistaDiverso