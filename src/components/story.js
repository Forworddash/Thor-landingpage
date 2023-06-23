import React from 'react';

const Story = ({ imageUrl, text }) => {
  return (
    <div>
      <img src={imageUrl} alt="Sample" style={{ width: '200px' }} />
      <p>{text}</p>
    </div>
  );
};

export default Story;
