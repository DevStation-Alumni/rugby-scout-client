import {
  FETCH_RESULTS_BEGIN,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE,
} from '../actions/search-actions';

const initialState = {
  results: [],
  loading: false,
  error: null,
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
        items: [],
      };

    default:
      return state;
  }
};
