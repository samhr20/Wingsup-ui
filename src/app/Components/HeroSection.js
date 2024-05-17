import React from 'react'
import { Button } from './Button'



export const HeroSection = () => {
  return (
    <div className=' flex justify-between p-12 px-28'>
      <div className='w-[42%] '>
        <h1 className='text-[50px] font-bold leading-[1.1]'>Friction-Less<br />Influencer<br />Marketing</h1>
        <div className='my-5 w-[250px] -rotate-2 text-white border bg-purple-500 text-5xl p-3 rounded-md text-center'>3M Users</div>
        <p className='my-4 text-lg'>The Biggest Programme For Influencers! Discover Thousands Of Influencers Across Niches And Classes</p>
        <Button data='Get A free Consulatation'/>
      </div>
      <div>
      </div>
    </div>
  )

}
