import React from 'react';

const FormRegister = () => {

    return (
        <div>
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
                        type="password"
                    />
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <button className='font-medium text-base text-[#003142]'>¿No tienes cuenta?</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className=' active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:bg-[#E3BC8D] transition-all py-3 rounded-xl bg-[#D3AB7A] text-white text-lg font-bold' type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default FormRegister