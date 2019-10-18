import React from 'react';
import './style.scss';

import memes from '../../assets/images/memes.jpg';

export default () => (
  <ul className="pictures">
    <li>
      <img src={memes} alt="Memes" />
    </li>
  </ul>
);
