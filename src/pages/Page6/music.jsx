import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import alldaylong from '../../assets/images/alldaylong.jpg';
import shows from '../../assets/images/shows.jpg';
import band from '../../assets/images/band.jpg';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default" src={alldaylong} caption="All Day Long..."></FramedImage>
    </li>
    <li className="wide">
      <FramedImage
        className="default"
        src={shows}
        caption={
          <>
            Shows
            <br />
            (KsE ❤)
          </>
        }
      ></FramedImage>
    </li>
    <li className="wide">
      <FramedImage className="default" src={band} caption="Banda"></FramedImage>
    </li>
  </ul>
);
