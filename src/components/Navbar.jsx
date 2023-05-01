import React from 'react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

const Navbar = () => {

    const navigate = useNavigate();
    function goToLogin() {
        navigate("/login");
      }

    useEffect(()=>{
        checkSession();
    },[]);

    async function checkSession(){
        console.log("Verificando sesión");

        const cookies = new Cookies();
        if(cookies.get("ID_Usuario") == "null"){
            goToLogin();
            return;
        }
        /*const response = await fetch('http://localhost:3001/api/users/' + cookies.get("ID_Usuario"),{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response.status; 
        const user = await response.json();

        if(status == 200){
            console.log(user);
        }
        else if(status == 404){
            //alert("Hubo un problema, volviendo al login");
            goToLogin();
        }*/
    }

    return (
        <div> 
            <div className="bg-[#EBCAA1] text-white flex justify-between items-center py-2 px-5">

            </div>
            <nav className="bg-[#102e38] text-white flex justify-between items-center py-3 px-5">
                <div className="flex items-center space-x-5 ">
                    <i className="fa-solid fa-bars"></i>
                    <h1 className="text-xl font-bold">VirtualART</h1>
                </div>
                <div className="flex items-center space-x-5 text-md">
                    <ul className="flex space-x-10 text-gray-50 font-medium">
                    <li>
                            <a href="#" className='hover:text-[#2bc5a4]'><Link to="/home">Inicio</Link></a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#2bc5a4]'><Link to="/diverso">Diverso</Link></a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#2bc5a4]'><Link to="/crearpin">Crear</Link></a>
                        </li>
                    </ul>
                </div>
               <SearchBar/>
              <UserMenu/>
            </nav>
        </div>
    );
};

export default Navbar