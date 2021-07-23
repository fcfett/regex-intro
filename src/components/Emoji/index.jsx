import React from 'react';
import './style.scss';

export default ({ content, label }) => (
  <span className="emoji" role="img" aria-label={label}>
    {content}
  </span>
);
