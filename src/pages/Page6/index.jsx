import React, { useState } from 'react';
import './style.scss';

import Modal from '../../components/Modal';
import music from './music';
import beer from './beer';
import memes from './memes';
import love from './love';

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
    <div id="page-6" className={`page ${showModal ? 'blur' : ''}`}>
      <h1>Hobbies</h1>
      <ul>
        <li>
          <button onClick={() => openModal(music)}>
            <span>Música</span>
            <span className="emoji" role="img" aria-label="microphone">
              🎙
            </span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal(beer)}>
            <span>Cerveja</span>
            <span className="emoji" role="img" aria-label="beer">
              🍻
            </span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal(memes)}>
            <span>Memes</span>
            <span className="emoji" role="img" aria-label="poop">
              💩
            </span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal(love)}>
            <span>Curtira a Nega Véia</span>
            <span className="emoji" role="img" aria-label="heart">
              🖤
            </span>
          </button>
        </li>
      </ul>
      <Modal closeHandler={closeModal} visible={showModal} content={content} />
    </div>
  );
};
