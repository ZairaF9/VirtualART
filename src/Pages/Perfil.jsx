import React from 'react';
import Navbar from '../components/Navbar';
import VistaContenidoPerfil from '../components/ContenidoVistaPerfil';
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