import React, { useRef, useState } from 'react';
import { json, useNavigate } from 'react-router';
import Cookies from 'universal-cookie';
import User from "../images/user.png";
import {Link} from "react-router-dom"
import { useEffect } from 'react';

const UserMenu = () => {

    const [open, setOpen] = useState(false);

    const menuRef = useRef();
    const imgRef = useRef();

    useEffect(()=>{
        loadAvatar();
    },[]);

    async function loadAvatar(){
        console.log("Buscando avatar de usuario");
        const cookies = new Cookies();
        const image = document.getElementById("imageControl");
        image.src = "http://localhost:3001/api/users/avatar/" + cookies.get("ID_Usuario");
    }

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });

    const navigate = useNavigate();
    function goToPage(route) {
        navigate(route);
    }

    async function logOff(){
        const cookies = new Cookies();
        cookies.set('ID_Usuario', null, { path: '/' });
        goToPage("/login");
    }

    return (
        <div>
            <div className="flex items-center space-x-5 text-base">
                <img id = 'imageControl' ref={imgRef} onClick={() => setOpen(!open)} src={User} className="h-10 w-10 object-cover border-2 border-[#2794b8] rounded-full cursor-pointer" />
            </div>
            {
                open &&

                <div ref={menuRef} className='bg-white p-4 w-40 shadow-lg absolute right-5 top-20 text-black rounded-lg'>
                    <ul>
                    <li onClick={() => goToPage("/perfil")} className='p-2 text-lg cursor-pointer rounded hover:bg-[#C4E5DC] hover:text-[#218488]' id = "btnProfile">Perfil</li>
                    <li onClick={() => goToPage("/perfil")} className='p-2 text-lg cursor-pointer rounded hover:bg-[#C4E5DC] hover:text-[#218488]' id = "btnPost">Mis creaciones</li>
                    <li onClick={() => goToPage("/tablero")} className='p-2 text-lg cursor-pointer rounded hover:bg-[#C4E5DC] hover:text-[#218488]' id = "btnBoard">Mis tableros</li>
                    <li onClick={() => logOff()} className='p-2 text-lg cursor-pointer rounded hover:bg-[#C4E5DC] hover:text-[#218488]' id = "btnLogOff">Salir</li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default UserMenu