import { React, useState } from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

const TableroInicio = () => {

  const [TabList, setTabList] = useState([]);

  const navigate = useNavigate();
  function goToPage(route) {
    navigate(route);
  }

  useEffect(() => {
    checkSession();
  }, []);

  function SeeTableroContent(id) {
    const cookies = new Cookies();
    cookies.set('ID_Tablero', id, { path: '/' });
    goToPage("/contenidotablero")
  }

  async function checkSession() {
    console.log("Obteniendo datos de usuario cargar información del perfil");

    const cookies = new Cookies();
    if (cookies.get("ID_Usuario") == "null") {
      goToPage("/login");
      return;
    }

    //Buscar tableros del usuario
    const response2 = await fetch('http://localhost:3001/api/tableros/user/' + cookies.get("ID_Usuario"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const status2 = await response2.status;
    const tableros = await response2.json();
    setTabList(tableros);

    if (status2 == 200) {
      console.log("Tableros del usuario:");
      //console.log((tableros));
      //var keyCount  = Object.keys(tableros).length;
      // console.log(keyCount);
      console.log("tableros:" + setTabList);

      /*const contenedor = document.getElementById("Contenedor");
      contenedor.innerHTML = "";

      for(var i = 0; i < keyCount; i++){
       contenedor.innerHTML += '<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" '+ onClick = {() => Alert()} +'>'
       + '  <div class="h-80 w-72">'
       + '    <img class="h-full w-full object-cover" src="http://localhost:3001/api/tableros/imgtablero/' + tableros[i].idtablero + '" alt=""/>'
       + '  </div>'
       + ' <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-teal-800/70 group-hover:via-teal-800/60 group-hover:to-teal-800/70"></div>'
       + ' <div class="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center ">'
       + ' <h1 class="font-dmserif text-3xl font-bold text-white">'+ tableros[i].nombre +'</h1>'
       + ' </div>'
       + '</div>'
      }*/

    }
    else if (status2 == 404) {
      //alert("Hubo un problema, volviendo al login");
      goToPage("/login");
    }
  }

  return (

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
        {TabList.map(tab => (
          <div key={tab} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" onClick={() => SeeTableroContent(tab.idtablero)}>
            <div className="h-80 w-72">
              <img className="h-full w-full object-cover" src={'http://localhost:3001/api/tableros/imgtablero/' + tab.idtablero} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-teal-800/70 group-hover:via-teal-800/60 group-hover:to-teal-800/70"></div>
            <div className="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center ">
              <h1 className="font-dmserif text-3xl font-bold text-white">{tab.nombre}</h1>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default TableroInicio