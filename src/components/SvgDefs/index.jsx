import React from 'react';
import { ReactComponent as AngleDown } from '../../assets/icons/angle-down.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Codepen } from '../../assets/icons/codepen.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

export default (props) => (
  <svg id="svg-defs">
    <symbol id="svg-icon-angle-down">
      <AngleDown />
    </symbol>
    <symbol id="svg-icon-facebook">
      <Facebook />
    </symbol>
    <symbol id="svg-icon-instagram">
      <Instagram />
    </symbol>
    <symbol id="svg-icon-linkedin">
      <Linkedin />
    </symbol>
    <symbol id="svg-icon-codepen">
      <Codepen />
    </symbol>
    <symbol id="svg-icon-github">
      <Github />
    </symbol>
  </svg>
);
