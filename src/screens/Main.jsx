import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Controller from '../components/Controller';
import { getRightPosition, getLeftPosition, getLeftWeight, getRightWeight } from '../redux/action';
import TeeterTotterLeftSide from '../components/TeeterTotterLeftSide';
import TeeterTotterRightSide from '../components/TeeterTotterRightSide';

function Main() {
  const dispatch = useDispatch();
  const element = useRef();
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [bending, setBending] = useState(0);
  const rightWeight = useSelector((state) => state.rightWeight);
  const leftWeight = useSelector((state) => state.leftWeight);
  const barOffsetTop = element && element.current && element.current.offsetTop;

  const rightObject = useSelector((state) => state.rightPosition);
  const right = useSelector((state) => state.leftPosition);
  const left = useSelector((state) => state.leftPosition);
  const rightObjDistance = 6 - rightObject / 55;
  const leftObjDistance = 6 - right / 55;

  const [rightObj, setRightObj] = useState();
  const [leftObj, setLefttObj] = useState();

  const shapePosition = () => Math.floor(Math.random() * 5) + 1;
  const shapeWeight = () => (Math.floor(Math.random() * 10) + 1).toString().concat('Kg');
  const createShape = () => Math.floor(Math.random() * 3) + 1;

  const startGame = () => {
    setStart(true);
    setGameOver(false);
    setBending(0);
    setRightObj(createShape());
    setLefttObj(Math.floor(Math.random() * 2) + 1);
    dispatch(getRightPosition(shapePosition() * 55));
    dispatch(getLeftPosition(shapePosition() * 55));
    dispatch(getLeftWeight(shapeWeight()));
    dispatch(getRightWeight(shapeWeight()));
  };

  const renderController = () => (
    <Controller
      startGame={startGame}
      name={start ? 'Stop' : 'Start'}
      rightWeight={rightWeight}
      leftWeight={leftWeight}
      leftDistance={leftObjDistance}
      rightDistance={rightObjDistance}
    />
  );
  const calculateBalance = () => {
    const rightObjWeight = rightWeight && Number(rightWeight.slice(0, -2));
    const rightObjDistancee = 6 - rightObject / 55;
    const leftObjWeight = leftWeight && Number(leftWeight.slice(0, -2));
    const leftObjDistancee = 6 - right / 55;
    const ratio = (leftObjWeight * leftObjDistancee) / (rightObjWeight * rightObjDistancee);
    if (ratio === 1) {
      setBending(0);
      setStart(false);
      setGameOver(false);
    } else if (ratio >= 1 && ratio < 3) {
      setBending(-10);
      setStart(false);
      setGameOver(false);
    } else if (ratio > 0.3 && ratio < 1) {
      setBending(10);
      setStart(false);
      setGameOver(false);
    } else if (ratio >= 3) {
      setBending(-30);
      setGameOver(true);
      setStart(false);
    } else if (ratio <= 0.3) {
      setBending(30);
      setGameOver(true);
      setStart(false);
    }
  };
  const style = {
    transform: `skew(10deg,${bending}deg)`,
  };
  const renderTeeterTotter = () => (
    <>
      <div className="shape-container">
        {start && (
          <>
            <div className="leftSide">
              <TeeterTotterLeftSide
                shape={leftObj}
                right={right}
                left={left}
                calculateBalance={calculateBalance}
                weight={leftWeight}
                barOffsetTop={barOffsetTop}
              />
            </div>
            <div className="rightSide">
              <TeeterTotterRightSide shape={rightObj} right={rightObject} weight={rightWeight} />
            </div>
          </>
        )}
      </div>
      <div className="barContainer" style={style} ref={element}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="base"></div>
    </>
  );
  const renderGameover = () => <div>Game Over</div>;

  const renderContainer = () => (
    <div className="main-container">
      {renderController()}
      {!gameOver ? renderTeeterTotter() : renderGameover()}
    </div>
  );

  return (
    <div className="main">
      <header className="main-header">{renderContainer()}</header>
    </div>
  );
}

export default Main;
