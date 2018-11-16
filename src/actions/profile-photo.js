'use strict';

import superagent from 'superagent';
import { switchRoute } from './route';

export const photoCreate = profilePhoto => ({
  type: 'PHOTO_CREATE',
  payload: profilePhoto,
});


export const profilePhotoRequest = (profile) => (dispatch, getState) => {
  let { auth } = getState();

  return superagent.post(`${__API_URL__}/upload`)
    .set('Authorization', `Bearer ${auth}`)
    .attach('profilePhoto', profile.profilePhoto)
    .then(res => {
      dispatch(photoCreate(res.body));
      return res;
    });
};