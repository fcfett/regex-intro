import React, { useState } from 'react';
import './style.scss';

import ArrowButton from '../ArrowButton';

const INITIAL_STATE = {
  current: 0,
  folding: false
};

export default ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));

  const arrChildren = children && children.length > 1 ? children : [children];
  const hasMultipleSlides = arrChildren.length > 1;
  const isFirstSlide = state.current === 0;
  const isLastSlide = state.current + 1 === arrChildren.length;
  const showPrevArrow = hasMultipleSlides && !isFirstSlide;
  const showNextArrow = hasMultipleSlides && !isLastSlide;

  const handlePrevClick = () => {
    const { current } = state;
    const newCurrent = current - 1;
    if (newCurrent >= 0) foldSlider(newCurrent);
  };

  const handleNextClick = () => {
    const { current } = state;
    const newCurrent = current + 1;
    if (newCurrent < arrChildren.length) foldSlider(newCurrent);
  };

  const foldSlider = (newCurrent) => {
    if (!state.folding) {
      updateState({ current: newCurrent, folding: true });
      setTimeout(() => {
        updateState({ folding: false });
      }, 500);
    }
  };

  const mapSlides = () => {
    return arrChildren.map(renderSlide);
  };

  const renderSlide = (slide, index) => (
    <li key={`slide-${index + 1}`} className={`slide ${state.current === index ? 'current' : ''}`}>
      {slide}
    </li>
  );

  return (
    <div className="page-slider">
      <ArrowButton className="prev" title="Previous Slide" isVisible={showPrevArrow} onClick={() => handlePrevClick()} />
      <ArrowButton className="next" title="Next Slide" isVisible={showNextArrow} onClick={() => handleNextClick()} />
      <ul>{mapSlides()}</ul>
      <footer className="current-page font-serif">
        <span>{state.current + 1}</span>/<strong>{arrChildren.length}</strong>
      </footer>
    </div>
  );
};
