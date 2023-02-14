import React from 'react';
import Rosales from "../images/editar.jpeg";

export default function FormEditarPin() {

    return (
        <form>
            <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
                <img src={Rosales} className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'/>
                <div className="lg:border-l-0 lg:border-b-8 w-[800px] lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className='flex items-end justify-end'>
                            <button className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-20 h-10 text-center' type='submit'>Editar</button>
                        </div>
                        <div>
                            <label className='text-lg font-medium'>Titulo</label>
                            <input
                                className='w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] rounded-xl p-4 mt-1 bg-white'
                               value='Plantas'
                                type='text'
                            />
                        </div>
                        <div className='mt-8'>
                            <label className='text-lg font-medium'>Descripción</label>
                            <textarea
                                className='w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] rounded-xl p-4 mt-1 bg-white'
                               value = 'Rosales en la ciudad'
                            />
                        </div>
                        <div className='mt-10'>
                            <label className='font-medium text-lg'>Categoría</label>
                            <select className=' mt-4 w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] text-lg'>
                                <option>Selecciona...</option>
                                <option selected>Naturaleza</option>
                                <option>Hola</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}