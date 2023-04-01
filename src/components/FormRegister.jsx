import {React, useState} from 'react';
import { Link } from "react-router-dom"
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { useForm } from 'react-hook-form';

const FormRegister = () => {

    const [type,setType] = useState("password");
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }

    /*validaciones
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const handleChange = (value) =>{

        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');

        //lowercase validation
        if(lower.test(value)){
            setLowerValidated(true);
        }else{
            setLowerValidated(false);
        }

        //uppercase validation
          if(upper.test(value)){
            setUpperValidated(true);
        }else{
            setUpperValidated(false);
        }

        //number validation
          if(number.test(value)){
            setNumberValidated(true);
        }else{
            setNumberValidated(false);
        }

        //special validation
          if(special.test(value)){
            setSpecialValidated(true);
        }else{
            setSpecialValidated(false);
        }

        //lowercase validation
          if(length.test(value)){
            setLengthValidated(true);
        }else{
            setLengthValidated(false);
        }
    }*/

    return (
        <div>
            <h2 className='text-5xl font-semibold text-[#003142]'>Registrate a VisualART</h2>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bievenido! por favor ingrese los datos.</p>
            <form className='mt-8' onSubmit={handleSubmit()}>
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Nombre Usuario</label>
                    <input
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingrese su nombre de usuario'
                        type="text"
                        {...register('nombre')}
                    />
                </div>
                <div className='mt-6'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingresa su correo electronico'
                        type="email"
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
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                        onClick = {() => setType("text")}
                        >
                            <AiFillEyeInvisible/>
                        </span>
                    ):(
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                        onClick={()=> setType("password")}
                        >
                        <AiFillEye/>
                        </span>
                    )}
                </div>
                <div className='mt-6'>
                <label className='text-lg font-medium'>Confirmar Contraseña</label>
                    <input
                        className='w-full border-2 border-transparent shadow-lg rounded-xl p-4 mt-1 bg-white'
                        placeholder='Ingrese nuevamente la contraseña'
                        type={type}
                    />
                    {type === "password"?(
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                        onClick = {() => setType("text")}
                        >
                            <AiFillEyeInvisible/>
                        </span>
                    ):(
                        <span className='icon-span text-2xl text-[#C4E5DC]'
                        onClick={()=> setType("password")}
                        >
                        <AiFillEye/>
                        </span>
                    )}
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <Link to="/login">  <button className='font-medium text-base text-[#003142]'>¿Ya tienes cuenta?</button></Link>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='submit'>Registrarse</button>
                </div>
            </form>
        </div>
    );
};

export default FormRegister