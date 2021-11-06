import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { useDispatch } from 'react-redux';
import { getInnerHeight } from '../redux/action';

const RandomObject = ({ shape, weight, top, right, onKeyDown, left }) => {
  const dispatch = useDispatch();
  const element = useRef();
  const renderShape = () => {
    switch (shape) {
      case 3:
        return (
          <div className={cs('triangle', `weight-${weight}`)} ref={element}>
            <div className="text">{weight}</div>
          </div>
        );
      case 2:
        return (
          <div className={cs('rectangle', `weight-${weight}`)} ref={element}>
            {weight}
          </div>
        );
      default:
        return (
          <div className={cs('circle', `weight-${weight}`)} ref={element}>
            {weight}
          </div>
        );
    }
  };

  useEffect(() => {
    if (top !== null) {
      dispatch(getInnerHeight(element.current.clientHeight));
    }
  });

  const style = {
    position: 'absolute',
    bottom: '0',
    fontSize: '13px',
    right: `${right}px`,
    left: `${left}px`,
    top: `${top}px`,
  };
  return (
    <div style={style} onKeyDown={onKeyDown}>
      {renderShape()}
    </div>
  );
};
RandomObject.defaultProps = {
  onKeyDown: 0,
};
RandomObject.propTypes = {
  shape: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  onKeyDown: PropTypes.number,
};

export default RandomObject;
