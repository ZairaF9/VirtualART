import { React, useState } from 'react';
import { json, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Rosa from "../images/rosas.jpg";
import User from "../images/user.png";
import User2 from "../images/user2.png";
import Cookies from 'universal-cookie';


const VistaImg = () =>{

  const navigate = useNavigate();
  function goToPage(route) {
    navigate(route);
  }

  useEffect(()=>{
    findPost();
  },[]);

  const [CommentList, setCommentList] = useState([]);

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

        //Busco los comentarios de la publicación
        const response3 = await fetch("http://localhost:3001/api/post/comment/" + cookies.get("ID_Post"),{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const status3 = await response3.status; 
        var commentsOBJ = await response3.json();

        if(status3 == 200){
          console.log(commentsOBJ);
          setCommentList(commentsOBJ);
        }
}

function SavePostTablero(){
  const post = document.getElementById("postID");
  const postid = parseInt(post.value);
  const cookies = new Cookies();
  cookies.set('ID_Post',postid, { path: '/' });
  goToPage("/posttableros")
}

async function PublishComment(){
  var key = window.event.keyCode;
    // Presionó enter
    if (key === 13) {
      const cookies = new Cookies();
      const txtComment = document.getElementById("Comment");
      const now = new Date();
        const bodyFetch = {description: txtComment.value, date: now, user: cookies.get("ID_Usuario"),
        post: cookies.get("ID_Post")};
        const response = await fetch('http://localhost:3001/api/post/comment',{
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
            //alert("Comentario creado exitosamente");
            txtComment.value = "";
            const response3 = await fetch("http://localhost:3001/api/post/comment/" + cookies.get("ID_Post"),{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }

            });
            const status3 = await response3.status; 
            var commentsOBJ = await response3.json();

            if(status3 == 200){
              console.log(commentsOBJ);
              setCommentList(commentsOBJ);
            }
        }
        else if(status == 500){
            alert("Ocurrió un problema durante la publicación del comentario");
        }
  }
}

async function savePost(){
  const cookies = new Cookies();
        const bodyFetch = {user: cookies.get("ID_Usuario"), post: cookies.get("ID_Post")};
        const response = await fetch('http://localhost:3001/api/post/saved',{
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
          console.log("Guardé el post");
        }
}

  return(
      <div>
     <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
     <input type='hidden' id='postID' name='postID' style={{visibility:false}}></input>
     <img src={Rosa} id="coverImage" name="coverImage" className='h-48 lg:h-auto lg:w-150 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'/>
      <div className="lg:border-l-0 lg:border-t-8 lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        <div className='flex items-end justify-end'>
                          <button className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-20 h-10 text-center' 
                          type='submit' onClick={() => savePost()}>Guardar</button>
                          <button className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-10 h-10 text-center mx-2' type='submit' onClick={()=> SavePostTablero()}>+</button>
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
        {CommentList.map(comment => (
          <div key={comment} >
            <img className="w-10 h-10 rounded-full mr-4" src={"http://localhost:3001/api/users/avatar/" + comment.idusuario} alt="Avatar of Jonathan Reinink"/>
            <div className="text-sm">
            <p className="text-gray-900 leading-none">{comment.fecha.slice(0,10)}</p>
            <p className="text-gray-900 leading-none">{comment.descripcion}</p>
            <br></br>
          </div>
          </div>
        ))}
        </div>
        <div>
        <div className="flex items-center">
          <img id='commentAvatar' className="w-10 h-10 rounded-full mr-4" src={User} alt="Avatar of Jonathan Reinink"/>
                  <textarea id='Comment' onKeyPress={() => PublishComment()}
                      className='w-full border-2 border-transparent shadow-lg rounded-xl p-2 mt-1 bg-white'
                      placeholder='Comentar...'
                  />
                   </div>
              </div>
      </div>
    </div>
      </div>
  );
};
export default VistaImg