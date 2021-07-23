import React from 'react';

export default () => (
  <div id="page-14" className="page">
    <h1>Compondo</h1>
    <ul className="list">
      <li>
        Algo específico: /<strong>algo</strong>/
      </li>
      <li>
        Pode ser <strong>qualquer coisa</strong>: /<strong>.</strong>/
      </li>
      <li>
        Pode ser <strong>opcional</strong>: /<strong>c?</strong>asa/
      </li>
      <li>
        A quantidade de vezes que tu quiser: <strong>*</strong>, <strong>+</strong> ou <strong>{'{n, n}'}</strong>
      </li>
      <li>
        No início, fim ou "borda" de uma string: <strong>^</strong>, <strong>$</strong>, <strong>\b</strong>
      </li>
    </ul>
  </div>
);
