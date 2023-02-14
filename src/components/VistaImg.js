import React from 'react';
import Logo from "../images/login.png";
import Rosa from "../images/rosas.jpg";
import User from "../images/user.png";
import User2 from "../images/user2.png";

export default function VistaImg(){
    return(
        <div>
       <div className="max-w-sm w-full h-[480px] lg:max-w-full lg:flex justify-center mt-24">
       <img src={Rosa} className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'/>
        <div className="lg:border-l-0 lg:border-t-8 lg:border-[#C4E5DC] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
          <div className='flex items-end justify-end'>
                            <button className='bg-[#2bc5a4] hover:bg-[#11755f] rounded-md font-bold text-white w-20 h-10 text-center' type='submit'>Guardar</button>
                        </div>
            <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
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
    )
}