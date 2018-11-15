'use strict';

import superagent from 'superagent';
import { statsSet } from '../actions/stats';

export const profileSet = profile => ({
  type: 'PROFILE_SET',
  payload: profile,
});

export const profileUpdate = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
});

export const profileFetchRequest = () => (dispatch, getState) => {
  let { auth } = getState();

  return superagent.get(`${__API_URL__}/api/v1/myprofile`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      dispatch(profileSet(res.body.profile));
      dispatch(statsSet(res.body.stats));
      return res;
    });
};


export const profileUpdateRequest = (profile) => (dispatch, getState) => {
  let { auth } = getState();

  return superagent.put(`${__API_URL__}/api/v1/profile`)
    .set('Authorization', `Bearer ${auth}`)
    .send(profile)
    .then(res => {
      dispatch(profileUpdate(res.body));
      return res;
    });
};
