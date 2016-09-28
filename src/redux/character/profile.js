import { SET_CHARACTER_PROFILE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
