import superagent from 'superagent';

export const statsSet = stats => ({
  type: 'STATS_SET',
  payload: stats,
});

export const statsUpdate = stats => ({
  type: 'STATS_UPDATE',
  payload: stats,
});

export const statsUpdateRequest = stats => (dispatch, getState) => {
  let { auth } = getState();
  return superagent.put(`${__API_URL__}/statBlock`)
    .set(`Authorization, Bearer ${auth}`)
    .send(stats)
    .then(res => {
      dispatch(statsUpdate(res.body));
    });
};
