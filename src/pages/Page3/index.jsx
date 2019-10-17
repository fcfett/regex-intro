import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import ntconsult from '../../assets/images/ntconsult.jpg';
import stefanini from '../../assets/images/stefanini.jpg';
import grupols from '../../assets/images/grupols.jpg';
import vg8 from '../../assets/images/vg8.jpg';

export default () => (
  <div id="page-3" className="page">
    <h1>Experience</h1>
    <ul className="timeline">
      <li>
        <a href="https://www.linkedin.com/company/ntconsult" target="_blank" rel="noopener noreferrer">
          <FramedImage title="NTConsult" src={ntconsult} />
          <strong>NTConsult</strong>
          <small>2011/05</small>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/stefanini-brasil" target="_blank" rel="noopener noreferrer">
          <FramedImage title="Stefanini/Dell" src={stefanini} />
          <strong>Stefanini / Dell</strong>
          <small>2015/09</small>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/grupols/" target="_blank" rel="noopener noreferrer">
          <FramedImage title="Liberta Investimentos" src={grupols} />
          <strong>Grupo L&S / Liberta Investimentos</strong>
          <small>2017/06</small>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/vg8/" target="_blank" rel="noopener noreferrer">
          <FramedImage title="VG8" src={vg8} />
          <strong>VG8</strong>
          <small>2019/05</small>
        </a>
      </li>
    </ul>
  </div>
);
