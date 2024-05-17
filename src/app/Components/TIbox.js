import React from 'react'

export const TIbox = (props) => {
  return (
    <div className='bg-[#F0FFF2] p-4 px-16 border-2 border-solid border-[#90EE90]  rounded-xl'>
        <a hrf='#' className='cursor-pointer'>{props.data}</a>
    </div>
  )
}
