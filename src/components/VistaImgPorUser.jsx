import { React, useState } from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Rosa from "../images/rosas.jpg";
import User from "../images/user.png";
import User2 from "../images/user2.png";
import Cookies from 'universal-cookie';
import swal from 'sweetalert';


const VistaImgUser = () =>{

  const navigate = useNavigate();
  function goToPage(route) {
    navigate(route);
  }

  useEffect(()=>{
    findPost();
  },[]);


async function findPost(){
    const cookies = new Cookies();
    const response = await fetch('http://localhost:3001/api/post/' + cookies.get("ID_Post") ,{
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    });
    const post = await response.json();

    console.log(post);
    const imageControl=document.getElementById("coverImage");
    imageControl.src='http://localhost:3001/api/post/image/' + cookies.get("ID_Post");

    const title=document.getElementById("title");
    title.innerHTML=post.titulo;

    const description = document.getElementById("description");
    description.innerHTML = post.descripcion;

    const postid = document.getElementById("postID");
    postid.value = post.idpublicaciones;
    //Buscar usuario
    const response2 = await fetch('http://localhost:3001/api/users/' + post.idusuario,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status = await response2.status; 
        var userOBJ = await response2.json();

        if(status == 200){
            console.log(userOBJ);
            const usernameLabel = document.getElementById("postCreator");
            usernameLabel.innerHTML = userOBJ.username;
            const avatar = document.getElementById("creatorAvatar");
            avatar.src = "http://localhost:3001/api/users/avatar/" + userOBJ.idusuario;
        }
        else if(status == 404){
            //alert("Hubo un problema, volviendo al login");
            goToPage("/login");
        }
        const CommentAvatar = document.getElementById("commentAvatar");
        CommentAvatar.src = "http://localhost:3001/api/users/avatar/" + cookies.get("ID_Usuario");
}

async function EliminarPost(){
    swal({
        title: "Estas Seguro?",
        text: "Al eliminar no podrás recuperar la publicacion creada!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("La publicacion ha sido eliminada", {
            icon: "success",
          });
          
        FunEliminarJSON();
          
        } else {
          swal("Se ha cancelado");
        }
      });
}

async function FunEliminarJSON(){
    const cookies = new Cookies();

    const response = await fetch('http://localhost:3001/api/post/comment/' + cookies.get("ID_Post"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response2 = await fetch('http://localhost:3001/api/post/saved/' + cookies.get("ID_Post"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response4 = await fetch('http://localhost:3001/api/posttablero/publi/' + cookies.get("ID_Post"), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

    const response3 = await fetch('http://localhost:3001/api/post/' + cookies.get("ID_Post"), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

    const status = await response3.status;

    if (status == 200) {
    
      swal("Muy Bien!", "Se elimino correctamente la publicacion", "success");
      goToPage("/home");

    }
    else if (status == 404) {
      //alert("Hubo un problema, volviendo al login");
      goToPage("/login");
    }
}

async function ModificarPost(){
  const cookies = new Cookies();
  cookies.get("ID_Post",{ path: '/' });
  goToPage("/editarpin");
}

  return(
      <div>
     <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
     <input type='hidden' id='postID' name='postID' style={{visibility:false}}></input>
     <img src={Rosa} id="coverImage" name="coverImage" className='h-48 lg:h-auto lg:w-150 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'/>
      <div className="lg:border-l-0 lg:border-t-8 lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        <div className='flex items-end justify-end'>
        <button className='bg-[#74d4af] hover:bg-[#11754f]  rounded-md font-bold text-white w-20 h-10 text-center mx-3' 
                          type='submit' onClick={() => ModificarPost()}>Editar</button>
                          <button className='bg-[#d4a374] hover:bg-[#753911]  rounded-md font-bold text-white w-20 h-10 text-center mx-3' 
                          type='submit' onClick={() => EliminarPost()}>Eliminar</button>
                      </div>
          <div className="text-gray-900 font-bold text-xl mb-2" id="title"></div>
          <p className="text-gray-700 text-base" id="description"></p>
          <div className="flex items-center pt-4">
          <img id='creatorAvatar' className="w-10 h-10 rounded-full mr-4" src={User2} alt="Avatar of Jonathan Reinink"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none" id="postCreator">Jonathan Reinink</p>
          </div>
        </div>
        <br></br>
        </div>
      </div>
    </div>
      </div>
  );
};
export default VistaImgUser