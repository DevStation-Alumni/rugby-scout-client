import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter() });
import LoginForm from './login.js';

describe('Login Component', () => {

  test('Login component exists', () => {
    let wrapper = Enzyme.shallow(<LoginForm />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('should show changes on email input', () => {

    let onChange = sinon.spy(LoginForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<LoginForm />);
    const event = {
      target: {
        name: 'email',
        value: 'Slardy@bartfast.com',
      }
    };

    wrapper.find('input[name="email"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on password input', () => {

    let onChange = sinon.spy(LoginForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<LoginForm />);
    const event = {
      target: {
        name: 'password',
        value: 'Slardybartfast',
      },
    };

    wrapper.find('input[name="password"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should call prop function on submit', () => {
    let onSubmit = sinon.spy(LoginForm.prototype, 'handleSubmit');

    let loginRequest = sinon.fake();

    let wrapper = Enzyme.shallow(<LoginForm loginRequest={loginRequest} />);
    const event = {
      preventDefault: jest.fn(),
    };

    wrapper.find('form').simulate('submit', event);

    expect(onSubmit.callCount).toBe(1);
    expect(loginRequest.callCount).toBe(1);
  });
});