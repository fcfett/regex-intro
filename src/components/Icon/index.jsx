import React from 'react';

const getPropsValues = (props) => {
  const name = props.name ? `#svg-icon-${props.name}` : null;
  const height = props.height || 32;
  const width = props.width || 32;
  return { name, height, width };
};

export default (props) => {
  const { name, height, width } = getPropsValues(props);
  return (
    name && (
      <svg className="icon" height={height} width={width}>
        <use xlinkHref={name}></use>
      </svg>
    )
  );
};
