import React from 'react';
import Navbar from '../components/Navbar';
import AllCategorias from './TodasCategorias';
import VistaContenidoDvs from '../components/ContenidoVistaDiverso';


const  Home = () =>{
    return(
        <div>
            <Navbar/>
            <VistaContenidoDvs/>
        </div>
    );
};

export default Home