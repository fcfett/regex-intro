import React from 'react';

export default ({ content, label }) => (
  <span className="emoji" role="img" aria-label={label}>
    {content}
  </span>
);
