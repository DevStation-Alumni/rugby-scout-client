import { login, signup, loginRequest, signupRequest } from './auth';
import { type } from 'os';

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