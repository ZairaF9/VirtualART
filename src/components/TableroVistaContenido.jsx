import React from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Flores from '../images/flores.jpeg'
import Navbar from './Navbar';


const TableroVistaContenido = () => {


  const [PostTabList, setPostTabList] = useState([]);

  const navigate = useNavigate();
  function goToPage(route) {
    navigate(route);
  }

  useEffect(() => {
    findPostTablero();
  }, []);

  async function findPostTablero() {
    const cookies = new Cookies();
    const response = await fetch('http://localhost:3001/api/tableros/' + cookies.get("ID_Tablero"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const tablero = await response.json();

    console.log(tablero);
    const imageControl = document.getElementById("coverImage");
    imageControl.src = 'http://localhost:3001/api/tableros/imgtablero/' + cookies.get("ID_Tablero");

    const title = document.getElementById("title");
    title.innerHTML = tablero.nombre;


    //Obtener las publicaciones del tablero seleccionado

    const response2 = await fetch('http://localhost:3001/api/posttablero/posts/' + cookies.get("ID_Tablero"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const status2 = await response2.status;
    const posttab = await response2.json();
    setPostTabList(posttab);

    if (status2 == 200) {
      console.log("Publicaciones del tablero:");
      console.log("publicaciones del tablero:" + setPostTabList);

    }
    else if (status2 == 404) {
      //alert("Hubo un problema, volviendo al login");
      goToPage("/login");
    }
  }

  async function EditTablero(){
    const cookies = new Cookies();
    cookies.get("ID_Tablero",{ path: '/' });
    goToPage("/editartablero");
  }

  async function EliminarTablero(){
    const cookies = new Cookies();

    const response = await fetch('http://localhost:3001/api/posttablero/' + cookies.get("ID_Tablero"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response2 = await fetch('http://localhost:3001/api/tableros/' + cookies.get("ID_Tablero"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    const tablero = await response2.json();
    const status = await response2.status;

    if (status == 200) {
    
      console.log("se elimino el tablero correctamente");
      goToPage("/home");

    }
    else if (status == 404) {
      //alert("Hubo un problema, volviendo al login");
      goToPage("/login");
    }
  }

  return (
    <div>
      <Navbar />
      <div class="group relative items-center justify-center overflow-hidden ">
        <img id='coverImage' className='w-full h-80 object-cover' src={Flores} />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 id='title' class="font-dmserif text-3xl font-bold text-white">Naturaleza</h1>
        </div>
      </div>
      <div>
        <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#15725e] 
                    transition-all py-3 rounded-xl bg-[#46c5b0] text-white text-lg font-bold' type='button' onClick={ () => EditTablero() }>Editar Tablero</button>
                    
        <button className=' mx-5 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#723a15] 
                    transition-all py-3 rounded-xl bg-[#dfa373] text-white text-lg font-bold' type='button' onClick={ () => EliminarTablero() }>Eliminar Tablero</button>
        </div>
      <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32">
        {PostTabList.map(tab => (
          <div key={tab} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-80 w-72">
              <img className="h-full w-full object-cover" src={'http://localhost:3001/api/post/image/' + tab.idpublicaciones} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default TableroVistaContenido