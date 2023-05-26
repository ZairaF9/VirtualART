import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';

const SearchBar = () => {
    const navigate = useNavigate();
    function goToHome() {
        navigate("/home");
    }

    function generateSearch(){
        var searchControl = document.getElementById("searchtxt");
        const cookies = new Cookies();
        cookies.set('Búsqueda', searchControl.value, { path: '/' });

        //Voy a home en dónde mostraré la búsqueda
        goToHome();
    }

    async function checkKeyPressed(){
        var key = window.event.keyCode;
          // Presionó enter
        if (key === 13) {
            generateSearch();
        }
    }

    return (
        <div className="w-[400px] border-none rounded flex items-center space-x-5">
            <form className='w-full'>
                <input id="searchtxt" onKeyPress={() => checkKeyPressed()} className="w-full outline-0 py-2 px-5 text-sm rounded-md text-black" type="search" placeholder="Search ..." />
            </form>
            <i onClick={()=>generateSearch()} className="fa-solid fa-magnifying-glass px-2 text-white"><FaSearch /></i>
        </div>
    );
};

export default SearchBar