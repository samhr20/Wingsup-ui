import React from 'react'
import { Button } from './Button'

export const GetInTouch = () => {
  return (
    <div className='h-[35vh] bg-[#E3F6FF]  p-12 pl-28 pr-12 flex flex-col justify-center items-center gap-3'>
        <p className='text-4xl font-bold '>Get In Touch</p>    
        <p className='text-lg mb-3'>Schedule A Free Consultation To Understand How The Wingsup Media Can Help You</p> 
        <Button data='Chat With Us'/>   
    </div>
  )
}
