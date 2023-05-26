import React from 'react';
import Rosales from "../images/editar.jpeg";
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

const DiversoContent = () =>{

  const navigate = useNavigate();
  function goToPage(route) {
      navigate(route);
  }


  useEffect(()=>{
      checkCategories();
  },[]);

  async function checkCategories(){
      console.log("Verificando sesión");

      const cookies = new Cookies();
      if(cookies.get("ID_Usuario") == "null"){
          goToPage("/login");
          return;
      }
      const response = await fetch('http://localhost:3001/api/categories',{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }

      });
      const status = await response.status; 
      const categories = await response.json();

      if(status == 200){
          const length = categories.length;

          const contenedor = document.getElementById("Contenedor");
          
          for(var i = 0; i < length; i++){
            const titulo = document.getElementById("tituloCat" + (i + 1));
            titulo.innerHTML=categories[i].nombre;
          }

          console.log(categories);
      }
      else if(status == 404){
          //alert("Hubo un problema, volviendo al login");
          goToPage("/home");
      }
  }

  function seeCategory(id){
    //alert("Le piqué a: " + id);
    const cookies = new Cookies();
    cookies.set('ID_Categoria', id, { path: '/' });
    goToPage("/vistadiverso")
  }

  return(
      <div>
        <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-12 pt-32">
        <div onClick= {() => seeCategory(1)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/1" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat1' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(2)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/2" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat2' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(3)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/3" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat3' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(4)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/4" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat4' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(5)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/5" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat5' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(6)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/6" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat6' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(7)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/7" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat7' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(8)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/8" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat8' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(9)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/9" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat9' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(10)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/10" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat10' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(11)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/11" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat11' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(12)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/12" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat12' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
           <div onClick= {() => seeCategory(13)} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-full">
           <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src = "http://localhost:3001/api/categories/image/13" alt="" />
           </div>
           <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
           <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
           <h1 id='tituloCat13' class="font-dmserif text-3xl font-bold text-white"></h1>
           </div>
           </div>
        </div>
        
    </div>
    
  );
};

export default DiversoContent