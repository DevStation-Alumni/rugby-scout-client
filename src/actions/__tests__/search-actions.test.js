import configureMockStore from 'redux-mock-store';
import thunk from '../../lib/middleware/redux-thunk';
import superagent from 'superagent';
import config from '../../../__mocks__/superagent-mock-config';

import {
  fetchResultsBegin,
  fetchResultsSuccess,
  fetchResultsFailure,
  fetchResultsRequest,
} from '../search-actions';

let superagentMock = require('superagent-mock')(superagent, config);

// describe('synchronous search actions', () => {
//   test('fetch results begin should return an object with type', () => {
//     const actual = fetchResultsBegin();

//     expect(typeof actual).toBe('object');
//     expect(actual.type).toBeDefined();
//   });

//   test('fetch results begin should return a type "FETCH_RESULTS_BEGIN"', () => {
//     const actual = fetchResultsBegin();
//     const expected = 'FETCH_RESULTS_BEGIN';

//     expect(actual.type).toBe(expected);
//   });

//   test('fetch results success should return a type "FETCH_RESULTS_SUCCESS"', () => {
//     const results = [];
//     const actual = fetchResultsSuccess(results);
//     const expected = 'FETCH_RESULTS_SUCCESS';

//     expect(actual.type).toBe(expected);
//   });

//   test('fetch results success should return a payload of results', () => {
//     const results = [1, 2, 3];
//     const actual = fetchResultsSuccess(results);
//     const expected = [1, 2, 3];

//     expect(actual.payload).toEqual(expected);
//   });
// });

describe('Asynch search tests', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    superagentMock = require('superagent-mock')(superagent, config);
  });

  afterEach(() => {
    superagentMock.unset();
  });

  test('fetch results request should first dispatch FETCH_RESULTS_BEGIN, then FETCH_RESULTS_SUCCESS when fetching is done', () => {
    const expectedActions = [
      { type: 'FETCH_RESULTS_BEGIN' },
      { type: 'FETCH_RESULTS_SUCCESS', payload: ['results1', 'results2', 'results3'] },
    ];

    const store = mockStore({});

    return store.dispatch(fetchResultsRequest('player'))
      .then(res => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});