import { React, useState } from 'react';
import Rosales from "../images/editar.jpeg";
import { json, useNavigate } from 'react-router';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { createContext } from 'react';

const VistaContenidoPerfil = () =>{
  
  const navigate = useNavigate();
  function goToPage(route) {
      navigate(route);
    }

    const [PostList, setPostList] = useState([]);

    useEffect(() => {
        checkSession();
    }, []);
  
    function ViewPost(id){
      const cookies = new Cookies();
      cookies.set('ID_Post', id, { path: '/' });
      goToPage("/vistapin")
    }
  

  async function checkSession(){
      console.log("Obteniendo datos de usuario cargar información del perfil");

      const cookies = new Cookies();
      if(cookies.get("ID_Usuario") == "null"){
          goToPage("/login");
          return;
      }
      const response = await fetch('http://localhost:3001/api/users/' + cookies.get("ID_Usuario"),{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }

      });
      const status = await response.status; 
      const user = await response.json();

      if(status == 200){
          //console.log(user);
          const txtUsername = document.getElementById("txtUsername");
          txtUsername.innerHTML = user.username;
      }
      else if(status == 404){
          //alert("Hubo un problema, volviendo al login");
          goToPage("/login");
      }

      //Buscar publicaciones del usuario
      const response2 = await fetch('http://localhost:3001/api/post/user/' + cookies.get("ID_Usuario"),{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      const status2 = await response2.status; 
      const posts = await response2.json();
      setPostList(posts);

      if(status2 == 200){
        /*console.log("Posts del usuario:");
        console.log((posts));
        var keyCount  = Object.keys(posts).length;
        console.log(keyCount);

        const contenedor = document.getElementById("Contenedor");
        contenedor.innerHTML = "";

        for(var i = 0; i < keyCount; i++){
         contenedor.innerHTML += '<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">'
         + '  <div class="h-80 w-72">'
         + '    <img class="h-full w-full object-cover" src="http://localhost:3001/api/post/image/' + posts[i].idpublicaciones + '" alt="" />'
         + '  </div>'
         + '</div>'
        }*/

      }
      else if(status2 == 404){
          //alert("Hubo un problema, volviendo al login");
          goToPage("/login");
      }
  }

  async function getUserPost(){
    const cookies = new Cookies();
    const response2 = await fetch('http://localhost:3001/api/post/user/' + cookies.get("ID_Usuario"),{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      const status2 = await response2.status; 
      const posts = await response2.json();
      setPostList(posts);
  }

  async function getSavedPost(){
    const cookies = new Cookies();
    const response2 = await fetch('http://localhost:3001/api/post/saved/' + cookies.get("ID_Usuario"),{
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      const status2 = await response2.status; 
      const posts = await response2.json();
      var postInfo = new Array();
      for(var i = 0; i < posts.length; i++){
        //console.log(posts[i]);
        const response = await fetch('http://localhost:3001/api/post/' + posts[i].idpublicacion,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
      });
      postInfo.push(await response.json());
      }
      console.log(postInfo);
      setPostList(postInfo);
  }

  return(
  <div flex-col items-center justify-center px-9 text-center>

    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-24">
        <h1 id='txtUsername' class="font-dmserif text-3xl font-bold text-black">Usuario</h1>
    </div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mt-15">
        <button onClick={() => goToPage("/editarperfil")} className='font-medium text-base text-[#003142]'>Editar Perfil</button>
    </div>
    

    <span className="max-w-sm w-full h-[5px] lg:max-w-full justify-center lg:flex mt-6">
    <button className='font-medium text-base text-[#003142] align=left'onClick={() => getUserPost()}>Creados</button>

    <h1>&nbsp; &nbsp; </h1>

    <button className='font-medium text-base text-[#003142] align=left'onClick={() => getSavedPost()}>Guardados</button>
    </span>

<br></br>
    <hr></hr>

    <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32 mt-20">
        {PostList.map(profilePost => (
          <div key={profilePost} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" onClick={()=> ViewPost(profilePost.idpublicaciones)}>
            <div class="h-80 w-72">
              <img class="h-full w-full object-cover" src={'http://localhost:3001/api/post/image/' + profilePost.idpublicaciones}  alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaContenidoPerfil