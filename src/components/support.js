import React from 'react';
import '../tailwind.css';


const Support = ({ imageUrl, text, title }) => {
  return (
    <div className='flex flex-row justify-center my-12'>
      <div className='basis-1/4'>
        <img className='rounded-full' src={imageUrl} alt="Sample" style={{ width: '200px' }} />
      </div>
      <div className='basis-1/2'>
        <h1 className='font-heading text-2xl font-bold'>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Support;
