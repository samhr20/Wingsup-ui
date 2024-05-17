import React from 'react';


export const Bigbutton = (props) => {
  return (
    <>
      <button className='w-full bg-blue-600 mt-4 p-6 text-white font-semibold rounded-lg'>{props.data}</button>
    </>
  );
};
