import { React, useState } from 'react';
import Subir from "../images/subir.png";
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';

const FormEditarPin = () => {

    const navigate = useNavigate();
    function goToPage(route) {
        navigate(route);
    }

    const [PinPic, setPinPic] = useState(["asd"]);

    useEffect(()=>{
        checkCategories();
    },[]);

    async function checkCategories(){
        console.log("Verificando sesión");

        const cookies = new Cookies();
        if(cookies.get("ID_Usuario") == "null"){
            goToPage("/login");
            return;
        }
        const response = await fetch('http://localhost:3001/api/categories',{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response.status; 
        const categories = await response.json();

        if(status == 200){
            const length = categories.length;

            const select = document.getElementById("selectCategoria");

            select.innerHTML = "";
            select.innerHTML += "<option value = '0'>Selecciona...</option>";
            for(var i = 0; i < length; i++){
                select.innerHTML += "<option value = '" + categories[i].idcategorias 
                + "'>" + categories[i].nombre + "</option>";
            }
            console.log(categories);
        }
        else if(status == 404){
            //alert("Hubo un problema, volviendo al login");
            goToPage("/home");
        }
        setPinPic(Subir);
    }

    async function editPost(){
        const txtTitulo=document.getElementById("titulo");
        const txtDescripcion=document.getElementById("descripcion");
        const categoria=document.getElementById("selectCategoria");

        if(txtTitulo.value==""){
            alert("Debes escribir un título");
            return;
        }
        if(txtDescripcion.value==""){
            alert("Debes colocar una descripción");
            return;
        }
        if(categoria.value==0){
            alert("Selecciona una categoría");
            return;
        }

        const cookies = new Cookies();

        const bodyFetch = {title: txtTitulo.value, description: txtDescripcion.value, 
            category: categoria.value, user: cookies.get("ID_Usuario")};

        const response1 = await fetch('http://localhost:3001/api/post/' + cookies.get("ID_Post"),{
            method: "PUT",
            body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response1.status;
        //Obtengo el código de respuesta (401 = fallido, 404 = usuario no existe 200 = inició sesión)

        console.log(status);

        if(status == 200){
            swal("Muy Bien!", "Se ha modificado la publicacion exitosamente", "success");
           goToPage("/home");
        }
        else if(status == 500){
            swal("Alerta!", "No se pudo modificar la publicacion", "warning");
        }
    }


    return (
        <form id='formEditPublicacion'>
               <h1 className='font-bold text-2xl text-center mt-5 pt-5'>Editar Publicación</h1>
            <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
            <input type='hidden' id='postID' name='postID' style={{visibility:false}}></input>
               
                <div className="lg:border-l-0 lg:border-b-8 w-[800px] lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                   
                        <div className='flex items-end justify-end'>
                            <button onClick={() => editPost()} className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-20 h-10 text-center' type='button'>Editar</button>
                        </div>
                        <div>
                            <label className='text-lg font-medium'>Titulo</label>
                            <input
                                id="titulo"
                                className='w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] rounded-xl p-4 mt-1 bg-white'
                                placeholder='Agrega un titulo...'
                                type='text'
                            />
                        </div>
                        <div className='mt-8'>
                            <label className='text-lg font-medium'>Descripción</label>
                            <textarea
                                id='descripcion'
                                className='w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] rounded-xl p-4 mt-1 bg-white'
                                placeholder='Agrega una descripción...'
                            />
                        </div>
                        <div className='mt-10'>
                            <label className='font-medium text-lg'>Categoría</label>
                            <select id='selectCategoria' className=' mt-4 w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] text-lg'>
                            
                            </select>
                        </div>
                        <input id='CategoriaID' name='CategoriaID' type="text" />
                    </div>
                </div>
            </div>
        </form>
    );
};
export default FormEditarPin