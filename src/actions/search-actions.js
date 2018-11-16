import superagent from 'superagent';
import { switchRoute } from './route';

export const FETCH_RESULTS_BEGIN = 'FETCH_RESULTS_BEGIN';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';
export const FETCH_RESULTS_FAILURE = 'FETCH_RESULTS_FAILURE';
export const FETCH_TOP_TEN_SUCCESS = 'FETCH_TOP_TEN_SUCCESS';
export const FETCH_TOP_TEN_FAILURE = 'FETCH_TOP_TEN_FAILURE';
export const FETCH_ONE_SUCCESS = 'FETCH_ONE_SUCCESS';
export const FETCH_ONE_FAILURE = 'FETCH_ONE_FAILURE';

export const fetchResultsBegin = () => ({
  type: FETCH_RESULTS_BEGIN,
});

export const fetchResultsSuccess = results => ({
  type: FETCH_RESULTS_SUCCESS,
  payload: results,
});

export const fetchResultsFailure = error => ({
  type: FETCH_RESULTS_FAILURE,
  payload: error,
});

export const fetchTopTenSuccess = results => ({
  type: FETCH_TOP_TEN_SUCCESS,
  payload: results,
});

export const fetchTopTenFailure = error => ({
  type: FETCH_TOP_TEN_FAILURE,
  payload: error,
});

export const fetchOneSuccess = profile => ({
  type: FETCH_ONE_SUCCESS,
  payload: profile,
});

export const fetchOneFailure = error => ({
  type: FETCH_ONE_FAILURE,
  payload: error,
});

export const fetchResultsRequest = query => dispatch => {
  dispatch(fetchResultsBegin());
  return superagent.get(`${__API_URL__}/api/v1/profile/all/${query}`)
    .then(res => {
      dispatch(fetchResultsSuccess(res.body));
      dispatch(switchRoute('/search-results'));
    })
    .catch(err => dispatch(fetchResultsFailure(err)));
};

export const fetchTopTenRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/statBlock/topten/player`)
    .then(res => {
      dispatch(fetchTopTenSuccess(res.body));
    })
    .catch(err => dispatch(fetchTopTenFailure(err)));
};

export const fetchOneProfile = id => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/profile/${id}`)
    .then(res => {
      console.log(res.body);
      dispatch(fetchOneSuccess(res.body));
      dispatch(switchRoute('/profileDetail'));
    })
    .catch(err => dispatch(fetchOneFailure(err)));
};