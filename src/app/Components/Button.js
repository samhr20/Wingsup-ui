import React from 'react'

export const Button = (props) => {
  return (
  
      <div className='flex  items-center'>
        <button className='text-white  p-2 rounded-lg  bg-blue-500 '>{props.data}</button>
      </div>
  )
}
