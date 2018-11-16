import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';
import search from './search';
import profile from './profile';
import profilePhotos from './profile-photo';
import stats from './stats';

export default combineReducers({
  route,
  auth,
  search,
  profile,
  profilePhotos,
  stats,
});
