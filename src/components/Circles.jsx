import * as React from 'react';
import {Circle} from 'react-awesome-shapes';

const Circles = () =>{
    return(
        <div>
  <div>
      <Circle
          color="#C4E5DC"
          size={['150px', '150px', '180px', '180px']}
          zIndex={2}
          position="absolute"
          left = "-35px"
          top= "-15px"
          
        />
      </div>
      <div>
      <Circle
          color="#C4E5DC"
          size={['30px', '30px', '30px', '30px']}
          zIndex={2}
          position="absolute"
          left = "80px"
          top= "20px"
          
        />
      </div>
      <div className='hidden xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['150px', '150px', '180px', '180px']}
          zIndex={2}
          position="absolute"
          right = "10px"
          top= "5px"
          
        />
      </div>
      <div className='hidden xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['30px', '30px', '30px', '30px']}
          zIndex={2}
          position="absolute"
          right = "150px"
          top= "50px"
          
        />
      </div>
      <div className='hidden xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['40px', '40px', '40px', '40px']}
          zIndex={2}
          position="absolute"
          right = "100px"
          top= "100px"
          
        />
      </div>
      <div className='hidden 2xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['50px', '50px', '50px', '50px']}
          zIndex={2}
          position="absolute"
          right = "50px"
          top= "330px"
          
        />
      </div>
      <div className='hidden 2xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['30px', '30px', '30px', '30px']}
          zIndex={2}
          position="absolute"
          right = "80px"
          top= "280px"
          
        />
      </div>
      <div className='hidden 2xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['40px', '40px', '40px', '40px']}
          zIndex={2}
          position="absolute"
          right = "140px"
          top= "350px"
          
        />
      </div>
      <div className='hidden 2xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['50px', '50px', '50px', '50px']}
          zIndex={2}
          position="absolute"
          left = "-10px"
          top= "355px"
          
        />
      </div>
      <div className='hidden 2xl:flex h-full'>
      <Circle
          color="#C4E5DC"
          size={['30px', '30px', '30px', '30px']}
          zIndex={2}
          position="absolute"
          left = "50px"
          top= "365px"
          
        />
      </div>
        </div>
    );
};

export default Circles