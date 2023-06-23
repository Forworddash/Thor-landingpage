import React from 'react';
import '../tailwind.css';


const Story = ({ imageUrl, text }) => {
  return (
    <div className=''>
      <img src={imageUrl} alt="Sample" style={{ width: '200px' }} />
      <p>{text}</p>
    </div>
  );
};

export default Story;
