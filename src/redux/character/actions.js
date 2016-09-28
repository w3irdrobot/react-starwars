import { API_URL } from '../../constants';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';

export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id,
  };
}

export function setCharacterProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile,
  };
}

export function getCharacterProfile(id) {
  return dispatch =>
    fetch(`${API_URL}/people/${id}`)
      .then(res => res.json())
      .then(profile =>
        dispatch(setCharacterProfile(profile))
      );
}
