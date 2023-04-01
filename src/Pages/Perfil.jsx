import React from 'react';
import Navbar from '../components/Navbar';
import DiversoContent from "../components/DiversoContent";
import VistaDiverso from './VistaDiverso';
import VistaPerfil from './VistaPerfil';
import VistaContenidoPerfil from '../components/ContenidoVistaPerfil';
import UserMenu from '../components/UserMenu';
import UserFoto from '../components/UserFoto';


const Perfil = () =>{
    return(
        <div>

            <Navbar/>
            <UserFoto/>
            <VistaContenidoPerfil/>
        </div>
    );
};

export default Perfil