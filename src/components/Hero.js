import React from 'react'
import Catalog from './Catalog'

const Hero = () => {
  return (
  <>
    <div>
        <div class="h-[43vh] bg-[url('/geometryc.png')] pt-40 overflow-hidden">
        <div class="h-40 w-[140%] mt-40 bg-white -rotate-[3deg]"></div>
        </div>
    </div>
      <Catalog/>
  </>
  )
}

export default Hero