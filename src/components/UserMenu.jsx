import React, { useRef, useState } from 'react';
import User from "../images/user.png";

const UserMenu = () => {

    const Menu = ['Perfil', 'Creaciones', 'Tableros', 'Salir'];
    const [open, setOpen] = useState(false);

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });

    return (
        <div>
            <div className="flex items-center space-x-5 text-base">
                <img ref={imgRef} onClick={() => setOpen(!open)} src={User} className="h-10 w-10 object-cover border-2 border-[#2794b8] rounded-full cursor-pointer" />
            </div>
            {
                open &&

                <div ref={menuRef} className='bg-white p-4 w-40 shadow-lg absolute right-5 top-20 text-black rounded-lg'>
                    <ul>
                        {Menu.map((menu) => (
                            <li onClick={() => setOpen(false)} className='p-2 text-lg cursor-pointer rounded hover:bg-[#C4E5DC] hover:text-[#218488]' key={menu}>{menu}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default UserMenu