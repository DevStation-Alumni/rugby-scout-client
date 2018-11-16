import {
  FETCH_RESULTS_BEGIN,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE,
  FETCH_TOP_TEN_SUCCESS,
  FETCH_TOP_TEN_FAILURE,
  FETCH_ONE_SUCCESS,
  FETCH_ONE_FAILURE,
} from '../actions/search-actions';

const initialState = {
  results: [],
  loading: false,
  error: null,
  topTen: [],
  profileDetail: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RESULTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: payload,
      };

    case FETCH_RESULTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        results: [],
      };

    case FETCH_TOP_TEN_SUCCESS:
      return {
        ...state,
        topTen: payload,
      };

    case FETCH_TOP_TEN_FAILURE:
      return {
        ...state,
        error: payload,
        topTen: [],
      };

    case FETCH_ONE_SUCCESS:
      return {
        ...state,
        profileDetail: payload,
      };

    case FETCH_ONE_FAILURE:
      return {
        ...state,
        error: payload,
        profileDetail: {},
      };

    default:
      return state;
  }
};
