import { RIGHT_POSITION, LEFT_POSITION, LEFT_WEIGHT, RIGHT_WEIGHT, HEIGHT } from '../types';

const init = {
  leftPosition: 0,
  rightPosition: 0,
  leftWeight: 0,
  rightWeight: 0,
  innerHeight: 0,
};
function reducer(state = init, action) {
  switch (action.type) {
    case LEFT_POSITION:
      return {
        ...state,
        leftPosition: action.data,
      };
    case RIGHT_POSITION:
      return {
        ...state,
        rightPosition: action.data,
      };
    case LEFT_WEIGHT:
      return {
        ...state,
        leftWeight: action.data,
      };
    case RIGHT_WEIGHT:
      return {
        ...state,
        rightWeight: action.data,
      };
    case HEIGHT:
      return {
        ...state,
        innerHeight: action.data,
      };
    default:
      return state;
  }
}

export default reducer;
