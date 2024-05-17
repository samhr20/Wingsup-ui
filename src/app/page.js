import React from 'react'
import Image from 'next/image'
import { HeroSection } from './Components/HeroSection'
import { LeadingBrands } from './Components/LeadingBrands'
import InfluencerMarketing from './Components/InfluencerMarketing'
import { SmartTools } from './Components/SmartTools'
import { TopCreator } from './Components/TopCreator'
import { GetInTouch } from './Components/GetInTouch'

const page = () => {

  return (
    <>
      <Image src="/banner.png" height={2500} width={2500} />
      <HeroSection  />
      <LeadingBrands />
      <InfluencerMarketing/>
      <SmartTools/>
      <TopCreator/>
      <GetInTouch/>

    </>
  )
}


export default page