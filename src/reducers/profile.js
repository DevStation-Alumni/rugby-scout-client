'use strict';

export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'PROFILE_SET': return payload;
    case 'PROFILE_CREATE': return payload;
    default: return state;
  }
};