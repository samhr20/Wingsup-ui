import React from 'react'
import Image from 'next/image'

export const Brands = (props) => {
  return (
     <div className='flex items-center justify-center bg-white w-48 rounded-md '>
        <Image src={props.image_url} height={props.height} width={props.width}  className='p-2' />
     </div>
  )
}
    