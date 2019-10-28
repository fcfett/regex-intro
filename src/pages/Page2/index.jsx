import React, { createElement } from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';

export default () => {
  const textToCharSpan = (text) => {
    const key = text.replace(/[^\w]*/g, '');
    const result = [];
    for (const i in text) {
      const char = text[i];
      result.push(createElement('span', { key: `${key}-${char}-${i}` }, char));
    }
    return result;
  };

  const toggleId = 'tg-name-input';

  return (
    <div id="page-2" className="page">
      <input type="checkbox" id={toggleId} />
      <h1 id="name">
        <label id={`${toggleId}-label`} htmlFor={toggleId}>
          <span id="first-name">{textToCharSpan('Felipe')}</span>
          <strong id="last-name">{textToCharSpan('Fett')}</strong>
        </label>
      </h1>
      <h2 id="stack">
        <span>{textToCharSpan('{ Full Stack Developer }')}</span>
      </h2>
      <FramedImage
        className="left"
        alt="Boba/Jango Fett helmet"
        src="https://raw.githubusercontent.com/fcfett/resources/master/fett-helmet.png"
      />

      <FramedImage
        className="image right"
        src="https://raw.githubusercontent.com/fcfett/resources/master/profile.jpg"
        alt="Fett's professional profile pic"
      />
    </div>
  );
};
