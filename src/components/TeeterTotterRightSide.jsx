import React from 'react';
import PropTypes from 'prop-types';
import RandomObject from './RandomObject';

const TeeterTotterRightSide = ({ shape, right, weight }) => (
  <RandomObject shape={shape} right={right} weight={weight} />
);

TeeterTotterRightSide.defaultProps = {
  weight: 0,
  shape: 0,
  right: 0,
};
TeeterTotterRightSide.propTypes = {
  shape: PropTypes.number,
  right: PropTypes.number,
  weight: PropTypes.number,
};
export default TeeterTotterRightSide;
