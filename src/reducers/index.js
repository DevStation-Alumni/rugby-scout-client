import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';
import search from './search';
import profile from './profile';

export default combineReducers({
  route,
  auth,
  search,
  profile,
});
