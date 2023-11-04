import React from 'react'
import Link from "next/link"
import Image from 'next/legacy/image'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 z-10'>
      <div className='flex justify-start w-full h-full'>
        <ul className='flex items-center px-8'>
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
    </div>
  )
}

export default Navbar