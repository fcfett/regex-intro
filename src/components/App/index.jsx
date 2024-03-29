import React from 'react';

import PageSlider from '../PageSlider';
import Title from '../../pages/Title';
import About from '../../pages/About';
import Regexr from '../../pages/Regexr';
import Quotes from '../../pages/Quotes';
import Metacharacter from '../../pages/Metacharacter';
import Flags from '../../pages/Flags';
import Composing1 from '../../pages/Composing1';
import Composing2 from '../../pages/Composing2';
import Shorthands from '../../pages/Shorthands';
import Groups from '../../pages/Groups';
import Lookaheads from '../../pages/Lookaheads';
import HandsOn from '../../pages/HandsOn';
import Reference from '../../pages/Reference';
import ThatsAll from '../../pages/ThatsAll';
import Social from '../../pages/Social';
import SvgDefs from '../SvgDefs';
import Anathomy from '../../pages/Anathomy';
import Alphanumeric from '../../pages/Alphanumeric';

export default () => {
  return (
    <div id="app">
      <SvgDefs />
      <PageSlider title="/RegExp?/i">
        <Title />
        <About />
        <Anathomy />
        <Flags />
        <Alphanumeric />
        <Metacharacter />
        <Quotes />
        <Regexr />
        <Composing1 />
        <Composing2 />
        <Shorthands />
        <Groups />
        <Lookaheads />
        <Reference />
        <HandsOn />
        <ThatsAll />
        <Social />
      </PageSlider>
    </div>
  );
};
