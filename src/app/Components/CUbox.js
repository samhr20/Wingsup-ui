import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone as solidPhone } from '@fortawesome/free-solid-svg-icons';

export const CUbox = (props) => {
  return (
    <div className='flex gap-8 items-center'>
      <FontAwesomeIcon icon={props.Svg}  height={30} width={30}/>
      <div>
        <h4 className='text-2xl font-medium'>{props.Heading}</h4>
        <p className='mt-2'>{props.Para}</p>
      </div>
    </div>
  );
};
