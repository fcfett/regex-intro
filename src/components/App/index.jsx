import React from 'react';

import PageSlider from '../PageSlider';
import Page1 from '../../pages/Page1';
import Page2 from '../../pages/Page2';
import Page3 from '../../pages/Page3';
import SvgDefs from '../SvgDefs';

function App() {
  return (
    <div id="app">
      <SvgDefs />
      <PageSlider>
        <Page1 />
        <Page2 />
        <Page3 />
      </PageSlider>
    </div>
  );
}

export default App;
