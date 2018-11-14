'use strict';

export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'PHOTO_CREATE': return payload;
    default: return state;
  }
};