'use client'
'use client'
import Image from 'next/image'
import React from 'react';

const Navbar = () => {

  return (
    <nav className={`fixed z-10 top-0 left-0 w-full transition-transform duration-300 ease-in-out  bg-[#ff6600] backdrop-blur-lg p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <Image src="/suits.png" alt="Logo" width={100} height={20} />
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/home" className="text-white hover:underline-offset-auto hover:decoration-white hover:decoration-2 hover:decoration">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-white">About</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-white">Service</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-white">Ideas</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-white">Careers</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
