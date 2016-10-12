import { SET_CHARACTER_WORLD } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_WORLD:
      return action.world;
    default:
      return state;
  }
};
