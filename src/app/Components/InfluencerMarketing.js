import React from 'react';
import { IMbox } from './IMbox';

const InfluencerMarketing = () => {
  // Data for IMboxes
  const imBoxesData = [
    { heading: '1.5mn+', para: 'Creators Available' },
    { heading: '2bn+', para: 'Reach Generated' },
    { heading: '50k+', para: 'Content Created' },
    { heading: '500+', para: 'Partner Brands' },
  ];

  return (
    <div className=' p-12 pl-20 pr-20'>
      <h3 className='my-7 text-6xl font-bold'>Influencer Marketing</h3>
      <div className='flex flex-wrap justify-\ items-center gap-7'>
        {imBoxesData.map((data, index) => (
          <IMbox key={index} heading={data.heading} para={data.para} />
        ))}
      </div>
    </div>
  );
};

export default InfluencerMarketing;
