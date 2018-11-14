import {
  FETCH_PLAYERS_BEGIN,
  FETCH_PLAYERS_SUCCESS,
} from '../actions/search-actions';

const initialState = {
  results: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PLAYERS_BEGIN:
      return { ...state };

    case FETCH_PLAYERS_SUCCESS:
      return { ...state, results: payload };

    default:
      return state;
  }
};
