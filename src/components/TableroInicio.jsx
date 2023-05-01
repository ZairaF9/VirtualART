import React from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

const TableroInicio = () =>{

  const navigate = useNavigate();
  function goToPage(route) {
      navigate(route);
    }

  useEffect(()=>{
    checkSession();
  },[]);

  async function checkSession(){
      console.log("Obteniendo datos de usuario cargar información del perfil");

      const cookies = new Cookies();
      if(cookies.get("ID_Usuario") == "null"){
          goToPage("/login");
          return;
      }

      //Buscar publicaciones del usuario
      const response2 = await fetch('http://localhost:3001/api/tableros/user/' + cookies.get("ID_Usuario"),{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      const status2 = await response2.status; 
      const tableros = await response2.json();

      if(status2 == 200){
        console.log("Tableros del usuario:");
        console.log((tableros));
        var keyCount  = Object.keys(tableros).length;
        console.log(keyCount);

        const contenedor = document.getElementById("Contenedor");
        contenedor.innerHTML = "";

        for(var i = 0; i < keyCount; i++){
         contenedor.innerHTML += '<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">'
         + '  <div class="h-80 w-72">'
         + '    <img class="h-full w-full object-cover" src="http://localhost:3001/api/tableros/imgtablero/' + tableros[i].idtablero + '" alt=""/>'
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
        
        <div flex-col items-center justify-center px-9 text-center>

    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-24">
        <h1 id='txtUsername' class="font-dmserif text-3xl font-bold text-black">Tableros</h1>
    </div>
   
    <span className="max-w-sm w-full h-[5px] lg:max-w-full justify-center lg:flex mt-6">
    <button className='font-medium text-base text-[#003142] align=left'>Mis Tableros</button>
    <button onClick={() => goToPage("/creartablero")} className='font-medium text-base text-[#003142] align=left mx-4'>Crear Tableros</button>
    </span>

<br></br>
    <hr></hr>

      <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32">   

      </div>
    </div>
    );
};

export default TableroInicio