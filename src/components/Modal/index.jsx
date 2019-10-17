import React from 'react';
import './style.scss';

export default ({ closeHandler, visible, content: Content }) =>
  visible && (
    <div className="modal">
      <div className="backdrop" onClick={() => closeHandler()}></div>
      <div className="content">{<Content />}</div>
    </div>
  );
