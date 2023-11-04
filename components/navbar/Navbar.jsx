import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 z-10'>
        <div className='flex justify-end w-full h-full'>
            <ul className='flex items-center px-8'>
                <Link href=''><li className='mx-8 font-averiabold uppercase text-sm text-rose-100/60 hover:text-yellow-50 transition ease-out duration-500'>Home</li></Link>
                <Link href=''><li className='mx-8 font-averiabold uppercase text-sm text-rose-100/60 hover:text-yellow-50 transition ease-out duration-500'>About</li></Link>
                <Link href=''><li className='mx-8 font-averiabold uppercase text-sm text-rose-100/60 hover:text-yellow-50 transition ease-out duration-500'>Projects</li></Link>
                <Link href=''><li className='mx-8 font-averiabold uppercase text-sm text-rose-100/60 hover:text-yellow-50 transition ease-out duration-500'>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar