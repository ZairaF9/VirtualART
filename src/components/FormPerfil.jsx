import React,{useState} from 'react';
import User from "../images/user.png";
import {Link} from "react-router-dom"
import { json, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

var FormPerfil = () => {
    var userOBJ = null;

    const navigate = useNavigate();
    function goToPage(route) {
        navigate(route);
    }

    useEffect(()=>{
        checkSession();
    },[]);
    
    async function checkSession(){
        console.log("Obteniendo datos de usuario para la sesión");
    
        const cookies = new Cookies();
        if(cookies.get("ID_Usuario") == "null"){
            goToPage("/login");
            return;
        }
        const userID = document.getElementById("userID");
        userID.value = cookies.get("ID_Usuario");

        const image = document.getElementById("imageControlProfile");
        image.src = "http://localhost:3001/api/users/avatar/" + cookies.get("ID_Usuario");

        const response = await fetch('http://localhost:3001/api/users/' + cookies.get("ID_Usuario"),{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response.status; 
        userOBJ = await response.json();

        if(status == 200){
            console.log(userOBJ);
        }
        else if(status == 404){
            //alert("Hubo un problema, volviendo al login");
            goToPage("/login");
        }
    }
    
    const changePic = async () => {
        //Subir foto al servidorS
        console.log("Subiendo imagen");
        var form = document.getElementById("formModProfile");
        var formData = new FormData(form);

        const response = await fetch('http://localhost:3001/api/users/avatar',{
            method: "POST",
            body: formData,
        });
        console.log(response);
        console.log("llamé la api");

        const cookies = new Cookies();
        const image = document.getElementById("imageControlProfile");
        image.src = "http://localhost:3001/api/users/avatar/" + cookies.get("ID_Usuario");
        const image2 = document.getElementById("imageControl");
        image2.src = "http://localhost:3001/api/users/avatar/" + cookies.get("ID_Usuario");
        this.forceUpdate();
    };

    const updateProfile = async ()=>{
        var userAux = userOBJ;
        console.log(userAux);
        //Guardar datos en la base de datos
        const usernametxt = document.getElementById("username");
        const passwordtxt = document.getElementById("password");
        const emailtxt = document.getElementById("email");

        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(usernametxt.value!=""){
            userAux.username = usernametxt.value;
        }
        if(emailtxt.value!=""){
            if (!emailRegex.test(emailtxt.value)) {
                alert("Formato de correo no válido");
                return;
            }
            else{
                userAux.email = emailtxt.value;
            }
        }
        if(passwordtxt.value!=""){
            userAux.userpassword = passwordtxt.value;
        }

        console.log(userAux);

        const bodyFetch = {username: userAux.username, password: userAux.userpassword, email: userAux.email};

        const cookies = new Cookies();

        const response = await fetch('http://localhost:3001/api/users/' + cookies.get("ID_Usuario"),{
            method: "PUT",
            body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response.status;
        //Obtengo el código de respuesta
        console.log(status);

        if(status == 200){
            alert("Usuario modificado exitosamente");
            goToPage("/perfil");
        }
        else if(status == 500){
            alert("Ocurrió un problema durante la modificación de la cuenta");
        }
    };

    return (
        <div className='w-96 m-40 text-left'>
            <form id='formModProfile' className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' encType='multipart/form-data'>
                <input type='hidden' id='userID' name='userID' style={{visibility:false}}></input>
                <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-24">
                    <img id='imageControlProfile' src={User} className="h-40 w-40 object-cover border-2 border-[#2794b8] rounded-full cursor-pointer" />
                </div>
                <br></br>
                <input type="file" id="avatar" name="avatar" onChange={() => changePic()} accept="image/png, image/jpeg"></input>
                <br></br>
                <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Nombre de Usuario</label>
                <input id='username' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow'/>
                <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Correo Electronico</label>
                <input id='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow'/>
                <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Contraseña</label>
                <input id='password' type='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow'/>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] 
                    transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='button' onClick={ () => updateProfile()}>Confirmar</button>
                </div>
            </form>
        </div>
    )
}

export default FormPerfil


