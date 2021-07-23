import React from 'react';

import Emoji from '../../components/Emoji';

export default () => (
  <div id="page-15" className="page">
    <h1>Shorthands</h1>
    <ul className="list">
      <li>
        Alfanuméricos e underline: <strong>\w</strong> | <strong>[a-zA-Z0-9]</strong>
      </li>
      <li>
        Dígitos: <strong>\d</strong> | <strong>[0-9]</strong>
      </li>
      <li>
        Espaço: <strong>\s</strong>
      </li>
      <li>
        Borda: <strong>\b</strong>
      </li>
      <li>
        Cada um possui seu gêmeo do mal: <strong>\W \D \S \B</strong> <Emoji label="Emoji do cramunhão" content="👹" />
      </li>
    </ul>
  </div>
);
