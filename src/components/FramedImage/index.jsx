import React from 'react';
import './style.scss';

export default ({ className, src, alt }) => (
  <div className={`image ${className}`}>
    <img src={src} alt={alt} />
  </div>
);
