import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import eita from '../../assets/images/eita.jpg';
import lasier from '../../assets/images/lasier.gif';
import cafe from '../../assets/images/cafe.jpg';
import fogo from '../../assets/images/fogo.gif';
import numsei from '../../assets/images/numsei.jpg';
import santana from '../../assets/images/santana.gif';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default " src={eita}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={numsei}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={cafe}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={lasier}></FramedImage>
    </li>
    <li className="wide">
      <FramedImage className="default " src={fogo}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={santana}></FramedImage>
    </li>
  </ul>
);
