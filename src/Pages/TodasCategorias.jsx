import React from 'react';
import Navbar from '../components/Navbar';
import Categorias from '../components/Categorias';
import DiversoContent from "../components/DiversoContent";
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const  AllCategorias = () =>{
    return(
        <div>
            <Navbar/>
            <DiversoContent/>
        </div>
    );
}

export default AllCategorias