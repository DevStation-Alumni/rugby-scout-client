'use strict';

export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'STATS_SET': return payload;
    case 'STATS_UPDATE': return payload;
    default: return state;
  }
};