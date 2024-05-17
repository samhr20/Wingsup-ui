import React from 'react'

export const IMbox = (props) => {
  return (
    <div className='bg-white px-[75px] py-12 flex justify-center items-center flex-col shadow-2xl rounded-lg'>
      <p className='text-[#7B1FAA] font-medium text-6xl'>{props.heading}</p>
      <p>{props.para}</p>
    </div>
  )
}
