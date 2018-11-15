import authReducer from './auth';

describe('authReducer', () =>{

  test('should show that no action type returns intial state', () => {
    let mockAction = {
      type: '',
      payload: 'payload',
    };

    let actual = authReducer(null, mockAction);
    expect(actual).toBeNull();
  });

  test('should show that LOGIN type return a token', () => {
    let mockAction = {
      type: 'LOGIN',
      payload: 'token',
    };

    let actual = authReducer(null, mockAction);
    expect(typeof actual).toBe('string');
    expect(actual).toBe('token');
  });

  test('should show that LOGOUT type returns null', () => {
    let mockAction = {
      type: 'LOGOUT',
    };

    let actual = authReducer(null, mockAction);
    expect(actual).toBeNull();
  });

});