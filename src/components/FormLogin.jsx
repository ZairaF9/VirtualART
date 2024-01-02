import React,{useState} from 'react';
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom";
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';

const FormLogin = () => {

    useEffect(()=>{
        checkSession();
    },[]);

    async function checkSession(){
        console.log("Obteniendo datos de usuario para la sesión");

        const cookies = new Cookies();
        if(cookies.get("ID_Usuario") != "null"){
            goToHome();
            return;
        }
    }

    const [type,setType] = useState("password");

    const navigate = useNavigate();
    function goToHome() {
        navigate("/home");
      }

    const login = async ()=>{
        const passwordtxt = document.getElementById("password");
        const emailtxt = document.getElementById("email");

        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(emailtxt.value==""){
            //alert("Ingresa un email");
            swal("Alerta!", "Ingresa un email", "warning");
            return;
        }
        else if (!emailRegex.test(emailtxt.value)) {
            //alert("Formato de correo no válido");
            swal("Alerta!", "Formato de correo no válido", "warning");
            return false;
        }
        else if(passwordtxt.value==""){
            //alert("Ingresa una contraseña");
            swal("Alerta!", "Ingresa una contraseña", "warning");
            return;
        }

        console.log("Validaciones pasadas, tratando de  iniciar sesión");
        const bodyFetch = {email: emailtxt.value, password: passwordtxt.value};

        const response = await fetch('https://virtualart-back.onrender.com',{
            method: "POST",
            body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response.status; 
        //Obtengo el código de respuesta (401 = fallido, 404 = el usuario no existe, 200 = inició sesión)

        const user = await response.json();

        console.log(status);
        
        const cookies = new Cookies();
        cookies.set('ID_Usuario', user.idusuario, { path: '/' });

        

        if(status == 200){
            //alert("Bienvenido");
            const cookies = new Cookies();
            cookies.set('Búsqueda', "", { path: '/' });
            goToHome();
        }
        else if(status == 404){
           // alert("El usuario no existe");
            swal("Alerta!", "El usuario no existe", "warning");
        }
        else if(status == 401){
            //alert("La contraseña es incorrecta");
            swal("Alerta!", "La contraseña es incorrecta", "warning");
        }
    };

    return (
        /* <Link to="/home">Entrar</Link> este sirve para dirigirse al home */
        <div>
            <h2 className='text-5xl font-semibold text-[#003142]'>Bienvenido a VisualART</h2>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bievenido! por favor ingrese los datos.</p>
            <form className='mt-8' id = "formLogin">
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        id='email'
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
                        type={type}
                    />
                    {type === "password"?(
                        <span className='icon-spanL text-2xl text-[#C4E5DC] flex flex-end justify-end mx-5'
                        onClick = {() => setType("text")}
                        >
                            <AiFillEyeInvisible/>
                        </span>
                    ):(
                        <span className='icon-spanL text-2xl text-[#C4E5DC] flex flex-end justify-end mx-5'
                        onClick={()=> setType("password")}
                        >
                        <AiFillEye/>
                        </span>
                    )}
                </div>
                <div className='mt-8 flex justify-center items-center'>
                <Link to="/registro"><button className='font-medium text-base text-[#003142]'>¿No tienes cuenta?</button></Link> 
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] 
                    transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='button' onClick={ () => login()}>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin