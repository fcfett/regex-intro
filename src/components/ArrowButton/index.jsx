import React from 'react';
import './style.scss';
import Icon from '../Icon';

const PageSliderArrow = ({ className, isVisible = true, ...props }) => {
  return (
    isVisible && (
      <button className={`arrow ${className}`} {...props}>
        <Icon width={42} height={42} name="angle-down" />
      </button>
    )
  );
};

export default PageSliderArrow;
