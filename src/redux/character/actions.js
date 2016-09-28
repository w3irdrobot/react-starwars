export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(id) {
  return {
    type: SET_CURRENT_USER,
    id,
  };
}
