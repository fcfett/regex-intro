import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import festival from '../../assets/images/festival.jpg';
import bqc from '../../assets/images/bqc.jpg';
import craft from '../../assets/images/craft.jpg';

export default () => (
  <ul className="pictures">
    <li className="wide">
      <FramedImage className="default " src={festival} caption="Festivais"></FramedImage>
    </li>
    <li className="wide">
      <FramedImage className="default" src={bqc} caption="Bah, Que Ceva"></FramedImage>
    </li>
    <li>
      <FramedImage className="default" src={craft} caption="Craft"></FramedImage>
    </li>
  </ul>
);
