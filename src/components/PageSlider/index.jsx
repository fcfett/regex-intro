import React, { useState, useEffect } from 'react';
import './style.scss';

import ArrowButton from '../ArrowButton';
import useKeyPress from '../../hooks/useKeyPress';
import useWheel from '../../hooks/useWheel';

const INITIAL_STATE = {
  current: 0,
  folding: false,
};

export default ({ title, children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));

  const arrChildren = children && children.length > 1 ? children : [children];
  const hasMultipleSlides = arrChildren.length > 1;
  const isFirstSlide = state.current === 0;
  const isLastSlide = state.current + 1 === arrChildren.length;
  const showPrevArrow = hasMultipleSlides && !isFirstSlide;
  const showNextArrow = hasMultipleSlides && !isLastSlide;

  const ArrowUpKeyPress = useKeyPress('ArrowUp'); // up arrow
  const ArrowDownKeyPress = useKeyPress('ArrowDown'); // down arrow
  const HomeKeyPress = useKeyPress('Home'); // up arrow
  const EndKeyPress = useKeyPress('End'); // down arrow
  const onWheel = useWheel();

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

  useEffect(() => {
    if (ArrowUpKeyPress) handlePrevClick();
  }, [ArrowUpKeyPress]); // eslint-disable-line

  useEffect(() => {
    if (ArrowDownKeyPress) handleNextClick();
  }, [ArrowDownKeyPress]); // eslint-disable-line

  useEffect(() => {
    if (HomeKeyPress) foldSlider(0);
  }, [HomeKeyPress]); // eslint-disable-line

  useEffect(() => {
    if (EndKeyPress) foldSlider(arrChildren.length - 1);
  }, [EndKeyPress]); // eslint-disable-line

  useEffect(() => {
    if (onWheel === 'up') handlePrevClick();
    if (onWheel === 'down') handleNextClick();
  }, [onWheel]); // eslint-disable-line

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
      <ul>{mapSlides()}</ul>
      <footer className="current-page font-serif">
        {title ? <strong>{title}</strong> : null}
        <div>
          <span>{state.current + 1}</span>/<strong>{arrChildren.length}</strong>
        </div>
      </footer>
      <ArrowButton className="prev" title="Previous Slide" isVisible={showPrevArrow} onClick={() => handlePrevClick()} />
      <ArrowButton className="next" title="Next Slide" isVisible={showNextArrow} onClick={() => handleNextClick()} />
    </div>
  );
};
