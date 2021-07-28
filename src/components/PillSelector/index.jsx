import React, { useState } from 'react';
import './style.scss';

export default ({ red, blue }) => {
  const [selected, setSelected] = useState();
  const pills = { red, blue };

  const handlePillClick = (pill) => {
    setSelected(pill);
  };

  return (
    <ul className="pills">
      {Object.entries(pills)
        .filter(([key]) => !selected || selected === key)
        .map(([key, value]) => (
          <li key={key}>
            <button className={`pill font-serif ${key} ${selected === key ? 'open' : ''}`} onClick={() => handlePillClick(key)}>
              <strong>{value}</strong>
            </button>
          </li>
        ))}
    </ul>
  );
};
