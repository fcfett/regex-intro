import React from 'react';

import Emoji from '../../components/Emoji';
import Fettip from '../../components/Fettip';

export default () => (
  <div id="page-13" className="page">
    <h1>Flags</h1>
    <ul className="list">
      <li>
        <h2 className="txt-big flex">
          <fieldset className="flex">
            <legend>Mais utilizadas</legend>
            <fieldset>
              <legend>Global</legend>g
            </fieldset>
            <fieldset>
              <legend className="-ty">
                Case
                <br />
                Insensitive
              </legend>
              i
            </fieldset>
            <fieldset>
              <legend>Multiline</legend>m
            </fieldset>
          </fieldset>
          <fieldset className="flex">
            <legend>Nunca nem vi!</legend>
            <fieldset>
              <legend>
                <a
                  href="https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/RegExp/sticky"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Sticky
                </a>
              </legend>
              s
            </fieldset>
            <fieldset>
              <legend>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Unicode
                </a>
              </legend>
              u
            </fieldset>
          </fieldset>
        </h2>
        <Fettip>
          associa àquelas ~antigas facas~ que tu não esquece mais! <Emoji label="Emoji piscadinha" content="😉" />
        </Fettip>
      </li>
    </ul>
  </div>
);
