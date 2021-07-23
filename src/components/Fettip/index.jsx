import React from 'react';
import './style.scss';

export default ({ children }) => (
  <span className="fettip">
    <strong>Fettip:</strong> {children}
  </span>
);
