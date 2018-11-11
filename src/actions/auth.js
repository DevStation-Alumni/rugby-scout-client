import superagent from 'superagent';
import * as utils from '../lib/util';

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