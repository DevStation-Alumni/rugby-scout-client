import superagent from 'superagent';
import * as utils from '../lib/util';
import switchRoute from './route';

/********************************************************************************
*         Synchronous                                                           *
********************************************************************************/

export const login = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};

export const logout = () => {
  utils.tokenDelete();
  return {
    type: 'LOGOUT',
  };
};

/********************************************************************************
*         Asynchronous                                                          *
********************************************************************************/

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/register`)
    .send(user)
    .withCredentials()
    .then(res => {
      localStorage.setItem('token', res.body);
      dispatch(login(res.body));
      dispatch(switchRoute('/profile/me'));
      return res;
    })
    .catch(console.error);
};

export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .send(user)
    .withCredentials()
    .then(res => {
      localStorage.setItem('token', res.body);
      dispatch(login(res.body));
      dispatch(switchRoute('/'));
      return res;
    })
    .catch(console.error);
};