import * as util from '../util';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

describe('tokenDelete', () => {
  test('should remove a token from localStorage', () => {
    const localStorage = new LocalStorageMock();
    localStorage.setItem('token', 'token');

    util.tokenDelete();

    expect(localStorage.token).toBeUndefined();
  });
});

describe('cookieDelete', () => {
  test('should delete a cookie from document.cookie', () => {
    const document = {
      cookie: '',
    };

    util.cookieDelete('token');

    expect(document.cookie).toBeDefined();
  });
});

describe('renderIf', () => {
  test('should return null if condition is false', () => {
    const actual = util.renderIf(false, 'hi');

    expect(actual).toBeNull();
  });

  test('should return hi if condition is true', () => {
    const actual = util.renderIf(true, 'hi');

    expect(actual).toBe('hi');
  });
});