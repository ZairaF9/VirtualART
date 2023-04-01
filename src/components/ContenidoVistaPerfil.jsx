import React from 'react';
import Rosales from "../images/editar.jpeg";

const VistaContenidoPerfil = () =>{
  return(
  <div flex-col items-center justify-center px-9 text-center>

    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-24">
        <h1 class="font-dmserif text-3xl font-bold text-black">Usuario</h1>
    </div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-15">
        <button className='font-medium text-base text-[#003142]'>Editar Perfil</button>
    </div>
    

    <span className="max-w-sm w-full h-[5px] lg:max-w-full justify-center lg:flex mt-6">
    <button className='font-medium text-base text-[#003142] align=left'>Creados</button>

    <h1>&nbsp; &nbsp; </h1>

    <button className='font-medium text-base text-[#003142] align=left'>Guardados</button>
    </span>

<br></br>
    <hr></hr>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32">   
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src={Rosales} alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
          <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
          <img class="h-full w-full object-cover" src={Rosales} alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
          <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-72">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaContenidoPerfil