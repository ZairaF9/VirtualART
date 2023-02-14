import React from 'react';
import Flores from '../images/flores.jpeg'
import VistaContenidoDvs from './ContenidoVistaDiverso';

const VistaDvs = () =>{
    return(
        <div>
        <div class="group relative items-center justify-center overflow-hidden ">
        <img className='w-full h-80 object-cover' src={Flores}/>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Naturaleza</h1>
              <p className='text-white pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisi velit. Morbi vel varius neque. Nam tellus turpis, cursus sed mi at, rutrum vulputate ipsum. Sed non quam semper, auctor leo eget, placerat ante. Aliquam interdum dui eu turpis vestibulum dapibus.</p>
            </div>
        </div>
        <VistaContenidoDvs/>
        </div>
    );
};

export default VistaDvs