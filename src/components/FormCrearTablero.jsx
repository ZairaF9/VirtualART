import React from "react";
import { json, useNavigate } from 'react-router';
import Cookies from 'universal-cookie';
import swal from "sweetalert";

const FormCrearTablero = () =>{

    const navigate = useNavigate();
    
    function goToPage(route) {
        navigate(route);
    }

    const changePic = async () => {
        //Obtengo el id más reciente
        const lastIDresponse = await fetch('http://localhost:3001/api/tableros/last',{
            method: "GET",
            //body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });
        const lastID = await lastIDresponse.json();

        //Subir foto al servidor
        console.log("Subiendo imagen");
        const id = document.getElementById("tableroID");
        id.value = parseInt(lastID[0].idtablero) + 1;
        var form = document.getElementById("Formtablero");
        var formData = new FormData(form);

        const response = await fetch('http://localhost:3001/api/tableros/imgtablero',{
            method: "POST",
            body: formData,
        });
        console.log(response);
        console.log("llamé la api");
    };

    async function createTablero(){
        const txtTitulo=document.getElementById("titulo");
       // const cbPrivacidad=document.getElementById("privacidad");
       

        if(txtTitulo.value==""){
            swal("Alerta!", "Debe escribir un titulo", "warning");
            return;
        }

       /* if(cbPrivacidad.checked == true){
           cbPrivacidad.value = 1;
            return;
        }else{
            cbPrivacidad.value = 0;
        }
        
        react
        <div className='mt-8'>
                <input id="privacidad" name="privacidad" className='text-lg font-medium' type="checkbox"/> Mantener mi tablero como privado
                </div>
        
        */

        const cookies = new Cookies();

        const bodyFetch = {title: txtTitulo.value, privacity: 0, user: cookies.get("ID_Usuario")};

        const response = await fetch('http://localhost:3001/api/tableros',{
            method: "POST",
            body: JSON.stringify(bodyFetch),
            headers: {
                "Content-Type": "application/json"
            }

        });

        const status = await response.status;
        //Obtengo el código de respuesta (401 = fallido, 404 = usuario no existe 200 = inició sesión)

        console.log(status);

        if(status == 200){
            swal("Muy Bien!", "Se ha creado el tablero exitosamente", "success");
            goToPage("/tablero");
        }
        else if(status == 500){
            alert("Ocurrió un problema durante la creación del tablero");
        }
    }

return (
    <form id="Formtablero">
    <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
    <input type='hidden' id='tableroID' name='tableroID' style={{visibility:false}}></input>
        <div className="lg:border-l-0 lg:border-b-8 w-[800px] lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                <div className='flex items-end justify-end'>
                    <button onClick={() => createTablero()} className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-20 h-10 text-center' type='submit'>Crear</button>
                </div>
                <div>
                    <label className='text-lg font-medium'>Titulo</label>
                    <input
                        id="titulo"
                        name = "titulo"
                        className='w-full lg:border-l-0 lg:border-b-2 lg:border-[#C4E5DC] rounded-xl p-4 mt-1 bg-white'
                        placeholder='Agrega un titulo...'
                        type='text'
                    />
                </div>
                <div className="mt-5">
                <input onChange={() => changePic()} type="file" id="imgtablero" name="imgtablero"  accept="image/png, image/jpeg"></input>
                </div>
                
               
            </div>
        </div>
    </div>
</form>
);

};

export default FormCrearTablero
    