import React from 'react';
import Rest from '../../components/Rest';

export default () => (
  <div id="page-12" className="page">
    <h1>Caracteres</h1>
    <ul className="list">
      <li>
        <h2 className="txt-big flex">
          <fieldset>
            <legend>Letras</legend>a<Rest />z
          </fieldset>
          <fieldset>
            <legend>Números</legend>0<Rest />9
          </fieldset>
          <fieldset>
            <legend>Símbolos</legend>#<Rest />@
          </fieldset>
        </h2>
        <small>
          (<strong>Quase</strong> qualquer carácter)
        </small>
      </li>
    </ul>
  </div>
);
