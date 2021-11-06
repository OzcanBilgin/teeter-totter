import React from 'react';
import PropTypes from 'prop-types';

const Controller = ({ startGame, name, rightWeight, leftWeight, rightDistance, leftDistance }) => (
  <div className="controller">
    <div className="details">
      <p>Total Weight: {leftWeight}</p>
      <p>Momentum: {leftDistance}</p>
    </div>
    <button onClick={startGame}>{name}</button>
    <div className="details">
      <p>Total Weight: {rightWeight}</p>
      <p>Momentum: {rightDistance}</p>
    </div>
  </div>
);

Controller.defaultProps = {
  leftWeight: 0,
  rightDistance: 0,
  leftDistance: 0,
};
Controller.propTypes = {
  startGame: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  rightWeight: PropTypes.number.isRequired,
  leftWeight: PropTypes.number,
  rightDistance: PropTypes.number,
  leftDistance: PropTypes.number,
};

export default Controller;
