import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import world from './world';
import movies from './movies';

export default combineReducers({
  id,
  profile,
  world,
  movies,
});
