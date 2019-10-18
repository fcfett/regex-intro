import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import family from '../../assets/images/family.jpg';
import food from '../../assets/images/food.jpg';
import morebeer from '../../assets/images/morebeer.jpg';
import fun from '../../assets/images/fun.jpg';
import movies from '../../assets/images/movies.jpg';

export default () => (
  <ul className="pictures">
    <li className="wide fun">
      <FramedImage className="default " src={fun}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={movies}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={food}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={morebeer}></FramedImage>
    </li>
    <li>
      <FramedImage className="default " src={family}></FramedImage>
    </li>
  </ul>
);
