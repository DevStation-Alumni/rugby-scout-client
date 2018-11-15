'use strict';

export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'STATS_SET': return payload;
    case 'STATS_UPDATE':
      return state.map(stats => {
        if (stats.id === payload.id){
          return payload;
        } else {return stats;}
      });
    default: return state;
  }
};