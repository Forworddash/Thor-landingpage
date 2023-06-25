import React from 'react';
import '../tailwind.css';


const Story = ({ imageUrl, text, title }) => {
  return (
    <div className='flex lg:flex-row justify-center md:flex-col flex-col h-screen story' id='story'>
      <div className='basis-1/2 m-auto md:p-0 py-12'>
        <img className='rounded-full drop-shadow-lg' src={imageUrl} alt="Sample" style={{ width: '400px' }} />
      </div>
      <div className='xl:basis-1/2 lg:basis-1/2 order-2 sm:basis-full md:basis-full m-auto'>
        <h1 className='font-heading text-2xl font-bold'>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Story;
