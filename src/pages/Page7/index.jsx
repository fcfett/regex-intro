import React from 'react';
import './style.scss';

import Icon from '../../components/Icon';

export default () => {
  const size = 120;
  return (
    <div id="page-7" className="page font-serif">
      <h1>@fcfett</h1>
      <ul>
        <li>
          <a href="https://facebook.com/fcfett" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="facebook" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/fcfett/" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="instagram" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/fcfett" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/fcfett/" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="codepen" />
          </a>
        </li>
        <li>
          <a href="https://github.com/fcfett" target="_blank" rel="noopener noreferrer">
            <Icon height={size} width={size} name="github" />
          </a>
        </li>
      </ul>
    </div>
  );
};
