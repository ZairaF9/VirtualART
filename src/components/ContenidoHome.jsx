import { React, useState } from 'react';
import Rosales from "../images/editar.jpeg";
import { json, useNavigate } from 'react-router';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { createContext } from 'react';

const VistaContenidoDvs = () => {

  const navigate = useNavigate();
  function goToPage(route) {
    navigate(route);
  }

  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    findPosts();
  }, []);

  function ViewPost(id){
    const cookies = new Cookies();
    cookies.set('ID_Post', id, { path: '/' });
    goToPage("/vistapin")
  }

  async function findPosts() {
    const cookies = new Cookies();
    if(cookies.get("Búsqueda") == ""){ //Carga post normalmente
      //Buscar publicaciones más recientes
      const response2 = await fetch('http://localhost:3001/api/post/', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const status2 = await response2.status;
      const posts = await response2.json();
      setPostList(posts);

      if (status2 == 200) {
        /* var keyCount  = Object.keys(posts).length;
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
      else if (status2 == 404) {
        //alert("Hubo un problema, volviendo al login");
        goToPage("/login");
      }
    }
    else{ //Realiza la búsqueda
      const response2 = await fetch('http://localhost:3001/api/post/search/' + cookies.get("Búsqueda"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const status2 = await response2.status;
      const posts = await response2.json();
      setPostList(posts);
    }
  }

  return (
    <div>

      <div id='Contenedor' class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 px-12 pt-32 mt-20">
        {PostList.map(post => (
          <div key={post} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" onClick={()=> ViewPost(post.idpublicaciones)}>
            <div class="h-80 w-72">
              <img class="h-full w-full object-cover" src={'http://localhost:3001/api/post/image/' + post.idpublicaciones}  alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaContenidoDvs