import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className='flex bg-gray-900 w-full text-white justify-between items-center py-8 px-32'>

        {/* Div First */}
        <Link className='text-4xl uppercase Logo' to="/">Layers</Link>

        {/* Div Second */}
        <ul className='flex gap-10 text-xl '>
          <li className='hover:underline'><Link to="/ourstroy">Our Story</Link></li>
          <li className='hover:underline'><Link to="/anracwatch">Anarc Watch</Link></li>
          <li className='hover:underline'><Link to="/anarcstrap">Anarc Strap</Link></li>
          <li className='hover:underline'><Link to="/skins">Skins</Link></li>
        </ul>


        {/* Div thirt */}
        <div className='flex gap-5 items-center'>
          <button className='bg-blue-600 px-5 py-2 rounded-full font-bold'><a href="#">Buy Now</a></button>
          <CiSearch className='text-3xl'/>
          <IoPerson className='text-3xl'/>
          <IoBagRemove className='text-3xl'/>
        </div>
      </nav>
    </div>
  )
}
