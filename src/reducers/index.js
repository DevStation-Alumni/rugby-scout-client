import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  route,
  auth,
  profile,
});
