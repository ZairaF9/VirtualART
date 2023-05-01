import React from 'react';
import Navbar from '../components/Navbar';
import TableroInicio from '../components/TableroInicio';
import UserFoto from '../components/UserFoto';


const Tableros = () =>{
    return(
        <div>

            <Navbar/>
            <UserFoto/>
            <TableroInicio/>
        </div>
    );
};

export default Tableros