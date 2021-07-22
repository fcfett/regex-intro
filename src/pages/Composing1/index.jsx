import React from 'react';

export default () => (
  <div id="page-14" className="page">
    <h1>Compondo</h1>
    <ul className="list">
      <li>
        Pode ser qualquer coisa: /<strong>.</strong>/
      </li>
      <li>
        Algo específico: /<strong>algo</strong>/
      </li>
      <li>
        Pode não ser obrigatório: /<strong>c?asa</strong>/
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
