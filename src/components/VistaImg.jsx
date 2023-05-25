import React from 'react';
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
}

function SavePostTablero(){
  const post = document.getElementById("postID");
  const postid = parseInt(post.value);
  const cookies = new Cookies();
  cookies.set('ID_Post',postid, { path: '/' });
  goToPage("/posttableros")
}

  return(
      <div>
     <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
     <input type='hidden' id='postID' name='postID' style={{visibility:false}}></input>
     <img src={Rosa} id="coverImage" name="coverImage" className='h-48 lg:h-auto lg:w-150 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'/>
      <div className="lg:border-l-0 lg:border-t-8 lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        <div className='flex items-end justify-end'>
                          <button className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-20 h-10 text-center' type='submit'>Guardar</button>
                          <button className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-10 h-10 text-center mx-2' type='submit' onClick={()=> SavePostTablero()}>+</button>
                      </div>
          <div className="text-gray-900 font-bold text-xl mb-2" id="title"></div>
          <p className="text-gray-700 text-base" id="description"></p>
          <div className="flex items-center pt-4">
          <img className="w-10 h-10 rounded-full mr-4" src={User2} alt="Avatar of Jonathan Reinink"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
          </div>
        </div>
        </div>
        <div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={User} alt="Avatar of Jonathan Reinink"/>
                  <textarea
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