import React from 'react';
//import thatsallfolks from '../../assets/images/thatsallfolks.jpg';
import thatsallfolks from '../../assets/images/thats-all-folks-bg.jpg';
import './style.scss';

export default () => (
  <div id="thats-all" className="page full">
    <img src={thatsallfolks} alt="That's all, folks!" />
    <h1>That's all, Folks!</h1>
  </div>
);
