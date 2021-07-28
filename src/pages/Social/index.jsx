import React from 'react';
import './style.scss';

import qrcode from '../../assets/images/qrcode.svg';

export default () => {
  return (
    <div id="social" className="page">
      <h1>@fcfett</h1>
      <ul className="list flex">
        <li>
          <h2 className="txt-big font-serif">Quer saber mais sobre a peculiar criatura que vos fala?</h2>
        </li>
        <li className="qrcode">
          <a href="https://fcfett.github.io/about/" target="_blank" rel="noopener noreferrer">
            <img src={qrcode} alt="QR Code para projeto about de Felipe Fett" />
          </a>
        </li>
      </ul>
    </div>
  );
};
