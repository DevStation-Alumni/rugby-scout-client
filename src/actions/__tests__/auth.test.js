import { login, logout, loginRequest, signupRequest } from '../auth';
import * as utils from '../../lib/util';

describe('login action', () => {
  let mockToken = 'token';

  test('should show that login action returns an object', () => {
    let actual = login(mockToken);

    expect(typeof actual).toBe('object');
  });

  test('should show that login object includes a type login and payload ', () => {
    let actual = login(mockToken);

    expect(actual.type).toBe('LOGIN');
    expect(actual.payload).toBe('token');
  });
});

describe('logout action', () => {

  test('should show that logout action returns an object', () => {
    let actual = logout();

    expect(typeof actual).toBe('object');
  });

  test('should show that login object includes a type login and payload ', () => {
    let actual = logout();

    expect(actual.type).toBe('LOGOUT');
  });
});

describe('Signup Request Action', () => {

  test('', () => {

  });
});

describe('Login Request Action', () => {

  test('', () => {

  });
});