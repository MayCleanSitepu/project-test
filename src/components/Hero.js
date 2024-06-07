import React from 'react'
import Catalog from './Catalog'

const Hero = () => {
  return (
    <div className='bg-blue '>
    <div>
        <div class="h-[30vh] bg-gradient-to-r from-cyan-500 to-blue-500 pt-40 overflow-hidden">
        <div class="h-40 w-[140%] bg-white -rotate-[3deg]"></div>
        </div>
    </div>
    <Catalog/>
    </div>
  )
}

export default Hero