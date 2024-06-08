import React from 'react'
import Catalog from './Catalog'


const Hero = () => {
  return (
  <>
    <div class="mx-auto h-screen overflow-y-scroll overflow-x-hidden bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('/geometryc.png')]">
      


        <h1 class="mt-60 text-white text-center text-5xl z-9">Ideas</h1>
        <p class="text-white text-center text-md static z-9">Where all your great things begin</p>


        <div class="h-[150px] w-[140%] mt-40 bg-white -rotate-[2deg]"></div>
          <div className='bg-white'> 
            <Catalog/>
          </div>
        </div>
    
      

  </>
  )
}

export default Hero