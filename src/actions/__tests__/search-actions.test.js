import {
  fetchResultsBegin,
  fetchResultsSuccess,
  fetchResultsFailure,
} from '../search-actions';

describe('search actions', () => {
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
});