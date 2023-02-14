import React from 'react';
import Navbar from '../components/Navbar';
import DiversoContent from '../components/DiversoContent';


export default function Diverso(){
    return(
        <div>
           <Navbar/>
           <h1 className='font-bold text-4xl text-center mt-20'>Navega al mundo</h1>
           <DiversoContent/>
        </div>
    )
}