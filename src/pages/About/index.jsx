import React, { useState } from 'react';

import Modal from '../../components/Modal';

import thompson from './thompson';
import kleene from './kleene';

const INITIAL_STATE = {
  showModal: false,
  content: null
};

export default () => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));
  const closeModal = () => updateState(INITIAL_STATE);
  const openModal = (content) => updateState({ showModal: true, content });
  const { showModal, content } = state;

  return (
    <div id="page-9" className={`page ${showModal ? 'blur' : ''}`}>
      <h1>História</h1>
      <ul className="list">
        <li>
          Descritas algebricamente na década de 50 pelo matemático <button onClick={() => openModal(kleene)}>Stephen Cole Kleene</button>{' '}
          com base na teoria de linguagens formais (modelagem, descrição e classificação)
        </li>
        <li>
          Implementadas por <button onClick={() => openModal(thompson)}>Ken Thompson</button> por volta de 1968 na ferramenta de busca
          (grep) do editor de texto padrão do Unix
        </li>
        <li>Foi se espalhando até ser consolidado na década de 80</li>
        <li>Atualmente a forma mais eficiente na busca e substituição de texto</li>
        <li>Dependendo da linguagem, possui implementações diferentes</li>
      </ul>
      <Modal closeHandler={closeModal} visible={showModal} content={content} />
    </div>
  );
};
