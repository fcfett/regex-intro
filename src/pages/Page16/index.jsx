import React from 'react';

export default () => (
  <div id="page-16" className="page">
    <h1>Groups</h1>
    <ul className="list">
      <li>
        Tu pode agrupar: <strong>{'(\\d{2})'}</strong>
      </li>
      <li>
        E usar suas referências em replaces: <strong>$n</strong>
      </li>
      <li>
        Ou retrovisores: <strong>{'(vira)-\\1'}</strong>
      </li>
      <li>
        Ou desconsiderá-la: <strong>{'https://(?:www).+'}</strong>
      </li>
    </ul>
  </div>
);
