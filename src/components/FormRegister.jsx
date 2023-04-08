import {React,useState} from 'react';
import { json, useNavigate } from 'react-router';
import { Link } from "react-router-dom"
import { AiFillEyeInvisible, AiFillEye, AiOutlineConsoleSql } from "react-icons/ai"

const FormRegister = () => {

    const [type,setType] = useState("password");
    const [typeC,setTypeCC] = useState("password");

    const navigate = useNavigate();
    function goToLogin() {
        navigate("/login");
      }

    const registro = async ()=>{
        const usernametxt = document.getElementById("username");
        const password1txt = document.getElementById("password1");
        const password2txt = document.getElementById("password2");
        const emailtxt = document.getElementById("email");

        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(usernametxt.value==""){
            alert("Ingrese un nombre de usuario");
            return;
        }
        else if(emailtxt.value==""){
            alert("Ingrese un correo");
            return;
        }
        else if (!emailRegex.test(emailtxt.value)) {
            alert("Formato de correo no válido");
            return false;
        }
        else if(password1txt.value==""){
            alert("Ingrese una contraseña");
            return;
        }
        else if(password2txt.value==""){
            alert("Debe confirmar la contraseña");
            return;
        }
        else if(password1txt.value!=password2txt.value){
            alert("Las contraseñas no coinciden");
            return;
        }
        
        /*console.log(usernametxt.value);
        console.log(password1txt.value);
        console.log(password2txt.value);
        console.log(emailtxt.value);*/

        
        console.log("Validaciones pasadas, creando usuario");

        const bodyFetch = {username: usernametxt.value, password: password1txt.value, email: emailtxt.value};

        const response = await fetch('http://localhost:3001/api/users/create',{
            method: "POST",
            body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response.status;
        //Obtengo el código de respuesta (401 = fallido, 404 = usuario no existe 200 = inició sesión)

        console.log(status);

        if(status == 200){
            alert("Usuario creado exitosamente");
            goToLogin();
        }
        else if(status == 500){
            alert("Ocurrió un problema durante la creación de la cuenta");
        }
    };

    return (
        <div>
            <h2 className='text-5xl font-semibold text-[#003142]'>Registrate a VisualART</h2>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bievenido! por favor ingrese los datos.</p>
            <form className='mt-8'>
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Nombre Usuario</label>
                    <input
                        id="username"
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingrese su nombre de usuario'
                        type="text"
                    />
                </div>
                <div className='mt-6'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        id="email"
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingresa su correo electronico'
                    />
                </div>
                <div className='mt-6'>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        id="password1"
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingrese su contraseña'
                        type={type}
                    />
                    {type === "password" ? (
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                            onClick={() => setType("text")}
                        >
                            <AiFillEyeInvisible />
                        </span>
                    ) : (
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                            onClick={() => setType("password")}
                        >
                            <AiFillEye />
                        </span>
                    )}
                </div>
                <div className='mt-6'>
                    <label className='text-lg font-medium'>Confirmar Contraseña</label>
                    <input
                        id="password2"
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingrese nuevamente la contraseña'
                        type={typeC}
                    />
                    {typeC === "password" ? (
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                            onClick={() => setTypeCC("text")}
                        >
                            <AiFillEyeInvisible />
                        </span>
                    ) : (
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                            onClick={() => setTypeCC("password")}
                        >
                            <AiFillEye />
                        </span>
                    )}
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <Link to="/login">  <button className='font-medium text-base text-[#003142]'>¿Ya tienes cuenta?</button></Link>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] 
                    transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='button' onClick={ () => registro()}>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default FormRegister