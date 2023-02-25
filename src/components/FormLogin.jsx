import React,{useState} from 'react';
import { json } from 'react-router';

const FormLogin = () => {

    const login = async ()=>{
        const passwordtxt=document.getElementById("password");
        const usernametxt=document.getElementById("username");

        const bodyFetch = {username: usernametxt.value, password: passwordtxt.value};

        if(usernametxt.value==""){
            alert("Ingresa un nombre de usuario");
            return;
        }

        if(passwordtxt.value==""){
            alert("Ingresa una contraseña");
            return;
        }

        const response = await fetch('http://localhost:3001/api/users/login',{
            method: "POST",
            body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const myJson = await response.json(); //extract JSON from the http response

        console.log(myJson);
    };

    return (
        <div>
            <h2 className='text-5xl font-semibold text-[#003142]'>Bienvenido a VisualART</h2>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bievenido! por favor ingrese los datos.</p>
            <form className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        id='username'
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingresa tu correo electronico'
                    />
                </div>
                <div className='mt-6'>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        id='password'
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingrese su contraseña'
                        type="password"
                    />
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <button className='font-medium text-base text-[#003142]'>¿No tienes cuenta?</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='button' onClick={ () => login()}>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin