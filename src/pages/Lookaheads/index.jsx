import React from 'react';

export default () => (
  <div id="page-17" className="page">
    <h1>Lookaheads</h1>
    <ul className="list">
      <li>
        <strong>Não contam</strong> como grupo/referência
      </li>
      <li>
        Positivo: <strong>(?=^\d{'{2,4}'}$).*</strong>
      </li>
      <li>
        Negativo: <strong>(?!www).*</strong>
      </li>
    </ul>
  </div>
);
