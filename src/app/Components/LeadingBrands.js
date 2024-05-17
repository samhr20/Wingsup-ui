import React from 'react';
import { Brands } from './Brands';

export const LeadingBrands = () => {
    // Array of image URLs
    const brandImages = [
        { image: '/logo1.png', height: 60, width: 60 },
        { image: '/logo2.png', height: 60, width: 60 },
        { image: '/logo3.png', height: 60, width: 60 },
        { image: '/logo4.png', height: 60, width: 60 },
        { image: '/logo5.png', height: 60, width: 60 },
        { image: '/logo6.png', height: 60, width: 60 },
        { image: '/logo7.png', height: 60, width: 60 },
        { image: '/logo8.png', height: 200, width: 200 },
        { image: '/logo9.png', height: 200, width: 200 },
        { image: '/logo10.png', height: 200, width: 200 },
        { image: '/logo11.png', height: 180, width: 180 },
        { image: '/logo12.png', height: 100, width:  100},
        { image: '/logo13.png', height: 150, width: 150 },
        { image: '/logo14.png', height: 180, width: 180 },
        { image: '/logo15.png', height: 100, width: 100 },
        { image: '/logo16.png', height: 100, width: 100 },
        { image: '/logo17.png', height: 170, width: 170 },
        { image: '/logo18.png', height: 170, width: 170 },
        { image: '/logo19.png', height: 170, width: 170 },
        { image: '/logo20.png', height: 150, width: 150 },
        { image: '/logo21.png', height: 150, width: 150 },
        { image: '/logo22.png', height: 170, width: 170 }
    ];

    return (
        <div className=' bg-[#7B1FAA] pt-12 pb-14 pl-28 pr-12'>
            <h3 className='my-7 text-6xl font-bold text-white'>Leading Brands</h3>
            <div className='flex flex-wrap items-center gap-5'>
                {brandImages.map((data, index) => (
                    <Brands key={index} image_url={data.image} height={data.height} width={data.width} />
                ))}
            </div>
        </div>
    );
};
