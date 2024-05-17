import React from 'react'
import STBox from './STBox'

export const SmartTools = () => {
  const smarttoolsdata = [
    { imageurl:'/smart.svg', heading:'Creator Insights' , para : 'Get Insights Of Any Influencer Profile Inside Seconds Straight From Your Browser' },
    { imageurl:'/smart1.svg', heading:'Campaign Executive' , para : 'Automatic End-To-End Campaign Execution. Eliminates Inessential Back & Forth And Unnumberable Stand Out Sheets' },
    { imageurl:'/smart2.svg', heading:'Market Research' , para : 'Enhance Your Business With Our New Age Research Solutions And Seize Opportunities By Acting Resolutely To Promote Modification Through Unjust Insights To Drive Extraordinary Growth' },
    { imageurl:'/smart3.svg', heading:'Leaderboard' , para : 'Perceive Insights And Information Of Quite Thousands Of Publishers Across The Social Media Platforms' },
    { imageurl:'/smart4.svg', heading:'Brand Quality & Intelligence' , para : 'Video Promoting With AI-Powered Insights Provides Valuable Digital Video Insights That Helps Your Brand To Make And Run Booming Campaigns' }
  ]
  return (
    <div className=' p-12 pl-24 pr-20'>
    <h3 className='my-7 text-6xl font-bold'>Smart Tools</h3>
    <div className='flex flex-wrap item-center gap-7 '>
      {smarttoolsdata.map((data , index) => (
        <STBox key={index} image_url={data.imageurl} heading={data.heading}  para={data.para}/>
      ))}
       
    </div>
</div>
  )
}   
