import React from 'react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Navbar = () => {
    return (
        <div>
            <div className="bg-[#EBCAA1] text-white flex justify-between items-center py-2 px-5">

            </div>
            <nav className="bg-[#102e38] text-white flex justify-between items-center py-3 px-5">
                <div className="flex items-center space-x-5 ">
                    <i className="fa-solid fa-bars"></i>
                    <h1 className="text-xl font-bold">VirtualART</h1>
                </div>
                <div className="flex items-center space-x-5 text-md">
                    <ul className="flex space-x-10 text-gray-50 font-medium">
                        <li>
                            <a href="#" className='hover:text-[#2bc5a4]'>Inicio</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#2bc5a4]'>Diverso</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#2bc5a4]'>Crear</a>
                        </li>
                    </ul>
                </div>
               <SearchBar/>
              <UserMenu/>
            </nav>
        </div>
    );
};

export default Navbar