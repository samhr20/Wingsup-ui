import React from 'react'
import { TIbox } from '../Components/TIbox'

const topinfluencer = () => {
  const TIboxData  = ['Art Entertainment','Auto','Buisness' ,'Education' , 'Family' , 'Fashion' , 'Fitness' , 'Food Drink' , 'Gadgets Tech' , 'Gaming' , 'Health Beauty' , 'Home Garden' , 'Jewellery Accesories' , 'Lifestyle' , 'Music' , 'Pets Animals' , 'Photography' , 'Politics' , 'Sport' , 'Travel' , 'TV , Film Radio' , 'Mature' , 'Charity Social Causes' ] 
  return (
    <>
      <div className='bg-[#7B1FAA]'>
        <h1 className=' text-center p-16 font-semibold text-5xl'>Top Influencer</h1>
        <div className='pb-10 flex justify-center  items-center'>
          <div className='flex w-[77%] flex-wrap item-centre justify-center gap-2'>
            {TIboxData.map((data , index) =>(
              <TIbox key={index} data={data}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default topinfluencer