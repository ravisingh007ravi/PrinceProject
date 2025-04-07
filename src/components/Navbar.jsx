import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(true)

  const MENUDATA = [
    { name: 'Our Story', href: 'ourstroy' },
    { name: 'Anarc Watch', href: 'anracwatch' },
    { name: 'Anarc Strap', href: 'anarcstrap' },
    { name: 'Skins', href: 'skins' },
  ]

  return (
    <div>
      <nav className='flex bg-gray-900 w-full text-white justify-between items-center py-8 md:px-32 px-5'>

        {/* Div First */}
        <Link className='text-4xl uppercase Logo' to="/">Layers</Link>

        {/* Div Second */}
        <ul className=' hidden md:flex gap-10 text-xl '>
          {
            MENUDATA.map(({ name, href }, key) => (
              <li key={key} className='hover:underline'><Link to={href}>{name}</Link></li>
            ))
          }
        </ul>


        {/* Div thirt */}
        <div className='flex gap-5 items-center'>
          <button className='hidden md:block bg-blue-600 px-5 py-2 rounded-full font-bold'><a href="#">Buy Now</a></button>
          <CiSearch className='text-3xl' />
          <IoPerson className='text-3xl' />
          <IoBagRemove className='text-3xl' />
        </div>

        <div className='md:hidden text-3xl' onClick={() => { setIsOpen(!isOpen) }}>
          {
            isOpen ? <FaBars /> : <IoCloseCircle />
          }
        </div>

        {
          !isOpen && (
            <ul className='md:hidden absolute top-25 left-0 w-full pb-10 bg-gray-900 flex flex-col gap-10 items-center justify-center text-2xl'>
              {
                MENUDATA.map(({ name, href }, key) => (
                  <li key={key} className='hover:underline'><Link to={href}>{name}</Link></li>
                ))
              }
              <button className='md:hidden bg-blue-600 px-5 py-2 rounded-full font-bold'><a href="#">Buy Now</a></button>

            </ul>
          )
        }


      </nav>
    </div>
  )
}
