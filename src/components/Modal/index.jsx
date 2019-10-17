import React, { useState, useEffect } from 'react';
import './style.scss';

export default ({ closeHandler, visible, content: Content }) => {
  const [state, setState] = useState({ active: false });
  const toggleActive = (active) => setState((state) => ({ ...state, active }));

  useEffect(() => {
    setTimeout(() => toggleActive(visible), 200);
  }, [visible]);

  return (
    visible && (
      <div className={`modal ${state.active ? 'active' : ''}`}>
        <div className="backdrop" onClick={() => closeHandler()}></div>
        <div className="content">{<Content />}</div>
      </div>
    )
  );
};
