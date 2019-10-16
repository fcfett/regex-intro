import React from 'react';
import './style.scss';

const FramedImage = ({ className, src, alt }) => {
  return (
    <div className={`image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default FramedImage;
