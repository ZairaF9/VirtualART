import React,{useState} from 'react';
import {useForm} from 'react-hook-form'

const FormPerfil = () => {

    const {editar, handleSubmit, watch, formState:{errors}} = useForm();
const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(watch(data));
}

return (
    <div className='w-96 m-40 text-left'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Nombre de Usuario</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow'/>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Correo Electronico</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow'/>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Contraseña</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow'/>
        </form>
    </div>
)
}

export default FormPerfil


