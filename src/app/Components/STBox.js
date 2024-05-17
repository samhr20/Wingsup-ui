'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const STBox = (props) => {
  const [showLink, setShowLink] = useState(false);

  const handleMouseEnter = () => {
    setShowLink(true);
  };

  const handleMouseLeave = () => {
    setShowLink(false);
  };

  return (
    <div className='bg-[#E3F6FF] p-9 rounded-md w-[55vh] relative h-[350px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image src={props.image_url} height={60} width={60} />
      <p className='font-bold my-2 text-xl'>{props.heading}</p>
      <p className='text-lg mb-5'>{props.para}</p>
      <a href='/' className={`text-blue-500 font-semibold transition-opacity duration-300 ${showLink ? 'opacity-100' : 'opacity-0 hidden'}`}
      >Get started</a>
    </div>
  );
};

export default STBox;
