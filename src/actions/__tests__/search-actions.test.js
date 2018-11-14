import {
  fetchPlayersBegin,
  fetchPlayersSuccess,
  fetchPlayersFailure,
} from '../search-actions';

describe('search actions', () => {
  test('fetch players begin should return an object with type', () => {
    const actual = fetchPlayersBegin();

    expect(typeof actual).toBe('object');
    expect(actual.type).toBeDefined();
  });

  test('fetch players begin should return a type "FETCH_PLAYERS_BEGIN"', () => {
    const actual = fetchPlayersBegin();
    const expected = 'FETCH_PLAYERS_BEGIN';

    expect(actual.type).toBe(expected);
  });
});