import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';
import search from './search';

export default combineReducers({
  route,
  auth,
  search,
});
