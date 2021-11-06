import { LEFT_POSITION, RIGHT_POSITION, LEFT_WEIGHT, RIGHT_WEIGHT, HEIGHT } from '../types';

export function getLeftPosition(data) {
  return {
    type: LEFT_POSITION,
    data,
  };
}
export function getRightPosition(data) {
  return {
    type: RIGHT_POSITION,
    data,
  };
}
export function getLeftWeight(data) {
  return {
    type: LEFT_WEIGHT,
    data,
  };
}
export function getRightWeight(data) {
  return {
    type: RIGHT_WEIGHT,
    data,
  };
}
export function getInnerHeight(data) {
  return {
    type: HEIGHT,
    data,
  };
}
