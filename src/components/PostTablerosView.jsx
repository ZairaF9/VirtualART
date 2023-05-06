import React from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import Cookies from 'universal-cookie';

const  PostTablerosView = () =>{

    const navigate = useNavigate();
    function goToPage(route) {
      navigate(route);
    }

    const [TabList,setTabList] = useState([]);

    useEffect(()=>{
        findPostTableros();
      },[]);
    
    async function findPostTableros(){
        const cookies = new Cookies();
        const response = await fetch('http://localhost:3001/api/post/' + cookies.get("ID_Post") ,{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
        });
        const post = await response.json();
    
        console.log(post);
    
        const postid = document.getElementById("postID");
        postid.value = post.idpublicaciones;

        const response2 = await fetch('http://localhost:3001/api/tableros/user/' + cookies.get("ID_Usuario"),{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

       const tableros = await response2.json();
        setTabList(tableros);
    }

    async function SavePostInTablero(id){
        const postid=document.getElementById("postID");

        alert("cliick"+ postid.value + id);

      
        const bodyFetch = {idtablero: id, idpublicacion: postid.value};

        const response = await fetch('http://localhost:3001/api/posttablero/create',{
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
            alert("Publicacion agregada exitosamente al tablero");
            goToPage("/home")
        }
        else if(status == 500){
            alert("Ocurrió un problema al añadir la publicacion al tablero");
        }
    }

    return(
        <div id="FormTableroPost">
           <h1 className='font-bold text-4xl text-center mt-20'>Selecciona el Tablero</h1>
        <input type='hidden' id='postID' name='postID' style={{visibility:false}}></input>
        <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32">   
      {TabList.map(tab => (
         <div key={tab} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" onClick={()=>SavePostInTablero(tab.idtablero)}> 
         <div className="h-80 w-72">
          <img className="h-full w-full object-cover" src={'http://localhost:3001/api/tableros/imgtablero/' + tab.idtablero}  alt=""/>
           </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-teal-800/70 group-hover:via-teal-800/60 group-hover:to-teal-800/70"></div>
          <div className="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center ">
           <h1 className="font-dmserif text-3xl font-bold text-white">{tab.nombre}</h1>
           </div>
          </div>
         
         ))}
      </div>
        </div>
    );
};

export default PostTablerosView