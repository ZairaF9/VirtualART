import React,{useState} from 'react';
import {Link} from "react-router-dom"
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"

const FormLogin = () => {

    const [type,setType] = useState("password");

    return (
        <div>
            <h2 className='text-5xl font-semibold text-[#003142]'>Bienvenido a VisualART</h2>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bievenido! por favor ingrese los datos.</p>
            <form className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingresa tu correo electronico'
                    />
                </div>
                <div className='mt-6'>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
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
               <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='submit'>  <Link to="/home">Entrar</Link></button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin