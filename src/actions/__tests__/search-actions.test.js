import {
  fetchResultsBegin,
  fetchResultsSuccess,
} from '../search-actions';

describe('synchronous search actions', () => {
  test('fetch results begin should return an object with type', () => {
    const actual = fetchResultsBegin();

    expect(typeof actual).toBe('object');
    expect(actual.type).toBeDefined();
  });

  test('fetch results begin should return a type "FETCH_RESULTS_BEGIN"', () => {
    const actual = fetchResultsBegin();
    const expected = 'FETCH_RESULTS_BEGIN';

    expect(actual.type).toBe(expected);
  });

  test('fetch results success should return a type "FETCH_RESULTS_SUCCESS"', () => {
    const results = [];
    const actual = fetchResultsSuccess(results);
    const expected = 'FETCH_RESULTS_SUCCESS';

    expect(actual.type).toBe(expected);
  });

  test('fetch results success should return a payload of results', () => {
    const results = [1, 2, 3];
    const actual = fetchResultsSuccess(results);
    const expected = [1, 2, 3];

    expect(actual.payload).toEqual(expected);
  });
});