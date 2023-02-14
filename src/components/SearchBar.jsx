import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

    return (
        <div className="w-[400px] border-none rounded flex items-center space-x-5">
            <form className='w-full'>
                <input className="w-full outline-0 py-2 px-5 text-sm rounded-md text-black" type="search" placeholder="Search ..." />
            </form>
            <i className="fa-solid fa-magnifying-glass px-2 text-white"><FaSearch /></i>
        </div>
    );
};

export default SearchBar