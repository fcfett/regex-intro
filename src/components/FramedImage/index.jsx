import React from 'react';
import './style.scss';

export default ({ className, src, alt }) => (
  <figure className={`image ${className}`}>
    <img src={src} alt={alt} />
  </figure>
);
