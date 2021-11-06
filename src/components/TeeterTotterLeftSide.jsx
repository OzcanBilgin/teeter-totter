import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import RandomObject from './RandomObject';
import { getLeftPosition } from '../redux/action';

const TeeterTotterLeftSide = ({ shape, left, right, calculateBalance, weight, barOffsetTop }) => {
  const dispatch = useDispatch();
  const [top, setTop] = useState(-50);
  const height = useSelector((state) => state.innerHeight);

  const onKeyPressed = (e) => {
    switch (e.keyCode) {
      case 39:
        dispatch(getLeftPosition(right + 55));
        break;
      case 37:
        dispatch(getLeftPosition(left - 55));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let interval;
    if (top + height + 40 < barOffsetTop - 50) {
      interval = setInterval(() => {
        const newTop = top + 10;
        setTop(newTop);
      }, 300);
    } else {
      calculateBalance();
    }
    document.addEventListener('keydown', (e) => onKeyPressed(e));
    return () => clearInterval(interval);
  });

  return (
    <RandomObject
      shape={shape}
      weight={weight}
      top={top}
      right={right}
      left={left}
      onKeyDown={onKeyPressed}
    />
  );
};
TeeterTotterLeftSide.defaultProps = {
  calculateBalance: 0,
  weight: 0,
  barOffsetTop: 0,
};
TeeterTotterLeftSide.propTypes = {
  shape: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.number.isRequired,
  calculateBalance: PropTypes.number,
  weight: PropTypes.number,
  barOffsetTop: PropTypes.number,
};

export default TeeterTotterLeftSide;
