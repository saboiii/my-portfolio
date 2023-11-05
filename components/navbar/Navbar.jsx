'use client'
import React from 'react'
import Link from "next/link"
import Image from 'next/legacy/image'
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-screen h-20 z-[100]'>
      <div className={nav ? 'md:hidden fixed left-0 w-full h-screen bg-black/70 ease-in duration-300 z-10' : ''}>
        <div className={nav ? "fixed left-0 top-0 w-[65%] sm:w-[50%] md:w-[45%] pt-8 h-screen backdrop-blur-md ease-in-out duration-300" :
          "fixed left-[-100%] top-0 w-[65%] sm:w-[50%] md:w-[45%] pt-8 h-screen backdrop-blur-md ease-in-out duration-300"}>

          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer text-rose-100 hover:scale-105 pr-1">
              <IoMdClose size={25} />
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center align-middle px-8">
              <ul>
                <Link href="/"> <div className="py-2 my-4 rounded bg-gradient-to-r from-rose-900/5 to-rose-800/10 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-rose-100 font-averiabold">Home</li></div> </Link>
                <Link href="/"> <div className="py-2 my-4 rounded bg-gradient-to-r from-rose-900/5 to-rose-800/10 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-rose-100 font-averiabold">About</li></div> </Link>
                <Link href="/"> <div className="py-2 my-4 rounded bg-gradient-to-r from-rose-900/5 to-rose-800/10 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-rose-100 font-averiabold">Contact</li></div> </Link>
                <Link href="/"> <div className="py-2 my-4 rounded bg-gradient-to-r from-rose-900/5 to-rose-800/10 hover:scale-[102%] transition ease-out duration-500 "><li className="text-lg text-center uppercase text-rose-100 font-averiabold">Projects</li></div> </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div onClick={handleNav} className="md:hidden flex justify-start w-full h-full p-8 items-center cursor-pointer">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="transition duration-300 hover:scale-105"
        />
      </div>

      <ul className='hidden md:flex backdrop-blur-md justify-start w-full h-full items-center px-8'>
        <Link href="/" className='mt-1'>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="transition duration-300 hover:scale-105"
          />
        </Link>
        <Link href=''><li className='mx-4 font-averiabold uppercase text-[12px] text-rose-100 hover:text-yellow-50 transition ease-out duration-500'>About</li></Link>
        <Link href=''><li className='mx-4 font-averiabold uppercase text-[12px] text-rose-100 hover:text-yellow-50 transition ease-out duration-500'>Projects</li></Link>
        <Link href=''><li className='mx-4 font-averiabold uppercase text-[12px] text-rose-100 hover:text-yellow-50 transition ease-out duration-500'>Contact</li></Link>
      </ul>

    </div>
  )
}

export default Navbar