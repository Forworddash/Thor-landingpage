import React from 'react';
import '../tailwind.css';


const Story = ({ imageUrl, text, title }) => {
  return (
    <div className='flex lg:flex-row justify-center sm:flex-col md:flex-col'>
      <div className='lg:basis-1/4 my-auto order-1 sm:basis-full md:basis-full'>
        <img className='rounded-full drop-shadow-lg' src={imageUrl} alt="Sample" style={{ width: '200px' }} />
      </div>
      <div className='lg:basis-1/2 order-2 sm:basis-full md:basis-full'>
        <h1 className='font-heading text-2xl font-bold'>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Story;
