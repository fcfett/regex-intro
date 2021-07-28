import React, { useState } from 'react';
import './style.scss';

export default ({ className, src, alt, caption }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`image ${className} ${loaded ? 'visible' : ''}`}>
      <img src={src} alt={caption || alt} onLoad={() => setLoaded(true)} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
};
