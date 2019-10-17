import React from 'react';

import PageSlider from '../PageSlider';
//import Page1 from '../../pages/Page1';
//import Page2 from '../../pages/Page2';
//import Page3 from '../../pages/Page3';
//import Page4 from '../../pages/Page4';
//import Page5 from '../../pages/Page5';
import Page6 from '../../pages/Page6';
//import Page7 from '../../pages/Page7';
import SvgDefs from '../SvgDefs';

export default () => {
  return (
    <div id="app">
      <SvgDefs />
      <PageSlider>
        {/* <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />*/}
        <Page6 />
        {/* <Page7 /> */}
      </PageSlider>
    </div>
  );
};