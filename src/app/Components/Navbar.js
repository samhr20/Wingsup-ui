import React from 'react'
import Image from 'next/image'
import { Button } from './Button'
import Link from 'next/link'
export const Navbar = () => {
  
  return (
    <div className='bg-gradient-to-r from-purple-700 via-purple-700 to-blue-700 p-1 px-[7%] flex justify-between' >

      <div className='flex justify-center items-center gap-20'>
        <Link href="/"><Image style={{ filter: 'invert(100%)' }} className="cursor-pointer" src="/logo.png" height={110} width={110}
        /></Link>

        <ul className='flex justify-center items-center gap-5 text-white font-medium text-base'>
          <li><Link href='/creator'>I'm A Creator</Link></li>
          <li><Link href='/topInfluencer'>Top Influencer</Link></li>
          <li><Link href='/aboutUs'>About Us</Link></li>
          <li><Link href='/contactUs'>Contact Us</Link></li>
        
        </ul>
      </div>
      <Button data='Chat With US' />
    </div>
  )
}
