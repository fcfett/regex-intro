import React from 'react';
import './style.scss';

import Icon from '../../components/Icon';

export default () => {
  const size = 120;
  return (
    <div id="social" className="page font-serif">
      <h1>@fcfett</h1>
      <ul>
        <li>
          <a href="https://facebook.com/fcfett" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="facebook" />
            <h2>Facebook</h2>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/fcfett/" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="instagram" />
            <h2>Instagram</h2>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/fcfett" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="linkedin" />
            <h2>LinkedIn</h2>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/fcfett/" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="codepen" />
            <h2>CodePen</h2>
          </a>
        </li>
        <li>
          <a href="https://github.com/fcfett" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="github" />
            <h2>GitHub</h2>
          </a>
        </li>
      </ul>
    </div>
  );
};
