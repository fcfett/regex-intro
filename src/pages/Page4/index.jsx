import React from 'react';
import './style.scss';

import fett from '../../assets/images/fett.png';

export default () => (
  <div id="page-4" className="page font-serif">
    <article>
      <q>
        Senioridade, acima de tudo, é uma questão de postura. Não adianta ter um currículo espetacular e quando algo der errado apresentar
        desculpas ao invés de uma solução.
      </q>
      <strong>Felipe Fett</strong>
    </article>
    <aside>
      <img src={fett} alt="Felipe Fett" />
    </aside>
  </div>
);
