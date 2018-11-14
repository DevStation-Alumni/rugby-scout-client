export const FETCH_PLAYERS_BEGIN = 'FETCH_PLAYERS_BEGIN';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';

export const fetchPlayersBegin = () => ({
  type: FETCH_PLAYERS_BEGIN,
});

export const fetchPlayersSuccess = players => ({
  type: FETCH_PLAYERS_SUCCESS,
  payload: players,
});

export const fetchPlayersFailure = error => ({
  type: FETCH_PLAYERS_FAILURE,
  payload: error,
});