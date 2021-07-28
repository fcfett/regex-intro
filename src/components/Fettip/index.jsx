import React from 'react';
import './style.scss';

export default ({ children }) => (
  <span className="fettip">
    <strong className="font-serif">Fettip:</strong> {children}
  </span>
);
