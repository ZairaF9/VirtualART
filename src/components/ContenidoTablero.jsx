import React from 'react';
import UserFoto from '../components/UserFoto';
import Navbar from '../components/Navbar';
import Flores from '../images/flores.jpeg'
import TableroVistaContenido from '../components/TableroVistaContenido';

const ContenidoTableros = () =>{
    return(
        <div>
            <Navbar/>
        <div class="group relative items-center justify-center overflow-hidden ">
        <img id='coverImage' className='w-full h-80 object-cover' src={Flores}/>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 id='title' class="font-dmserif text-3xl font-bold text-white">Nombre Tablero</h1>
              <p id='editar' class="font-dmserif text-l font-bold text-gray-200">Editar Tablero</p>
            </div>
        </div>
       <TableroVistaContenido/>
        
    </div>
    );
};

export default ContenidoTableros