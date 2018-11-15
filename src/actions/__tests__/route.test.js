import { switchRoute } from '../route';

describe('SwitchRoute tests', () => {
  test('should return an action object with type and payload', () => {
    const path = '/';
    const actual = switchRoute(path);
    const expected = {
      type: 'SWITCH_ROUTE',
      payload: '/',
    };

    expect(actual).toEqual(expected);
  });
});