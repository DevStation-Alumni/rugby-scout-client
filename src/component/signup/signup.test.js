import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

jest.mock('validator');

Enzyme.configure({ adapter: new Adapter });
import SignupForm from './signup.js';

describe('Signup form component', () =>{

  test('Signup form component exists', () => {
    let wrapper = Enzyme.shallow(<SignupForm />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('should show changes on username input', () => {
  
    let onChange = sinon.spy(SignupForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<SignupForm />);
    const event = {target: {
      name: 'username',
      value: 'Slardybartfast',
    }};

    wrapper.find('input[name="username"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on password input', () => {
  
    let onChange = sinon.spy(SignupForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<SignupForm />);
    const event = {target: {
      name: 'password',
      value: 'Slardybartfast',
    }};

    wrapper.find('input[name="password"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on email input', () => {
  
    let onChange = sinon.spy(SignupForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<SignupForm />);
    const event = {target: {
      name: 'email',
      value: 'Slardybartfast@gmail.com',
    }};

    wrapper.find('input[name="email"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show validator error on email input', () => {
  
    let onChange = sinon.spy(SignupForm.prototype, 'handleChange');

    let wrapper = Enzyme.shallow(<SignupForm />);
    const event = {target: {
      name: 'email',
    }};

    wrapper.find('input[name="email"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().emailError).toBe('email field cannot be empty');
    onChange.restore();
  });
});