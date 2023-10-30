import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='fixed w-full h-20'>
        <div className='flex justify-end w-full h-full'>
            <ul className='flex items-center px-8'>
                <Link href=''><li className='mx-8 font-cairobold uppercase text-md hover:text-[#d2afff] transition ease-out duration-500 text-white'>Home</li></Link>
                <Link href=''><li className='mx-8 font-cairobold uppercase text-md hover:text-[#d2afff] transition ease-out duration-500 text-white'>About</li></Link>
                <Link href=''><li className='mx-8 font-cairobold uppercase text-md hover:text-[#d2afff] transition ease-out duration-500 text-white'>Projects</li></Link>
                <Link href=''><li className='mx-8 font-cairobold uppercase text-md hover:text-[#d2afff] transition ease-out duration-500 text-white'>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar