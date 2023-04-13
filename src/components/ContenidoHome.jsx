import React from 'react';
import Rosales from "../images/editar.jpeg";
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { createContext } from 'react';

const VistaContenidoDvs = () =>{

  const navigate = useNavigate();
  function goToPage(route) {
      navigate(route);
    }

  useEffect(()=>{
    findPosts();
  },[]);

  async function findPosts(){
    //Buscar publicaciones más recientes
    const response2 = await fetch('http://localhost:3001/api/post/',{
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    });
    const status2 = await response2.status; 
    const posts = await response2.json();

    if(status2 == 200){
    var keyCount  = Object.keys(posts).length;
    console.log(keyCount);

    const contenedor = document.getElementById("Contenedor");
    contenedor.innerHTML = "";

    for(var i = 0; i < keyCount; i++){
    contenedor.innerHTML += '<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">'
    + '  <div class="h-80 w-72">'
    + '    <img class="h-full w-full object-cover" src="http://localhost:3001/api/post/image/' + posts[i].idpublicaciones + '" alt="" />'
    + '  </div>'
    + '</div>'
    }

    }
    else if(status2 == 404){
      //alert("Hubo un problema, volviendo al login");
      goToPage("/login");
    }
  }
  
  return(
  <div>
      <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32">
        
      </div>
    </div>
  );
};

export default VistaContenidoDvs