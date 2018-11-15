import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import { AuthFormContainer, mapDispatchToProps, mapStateToProps } from './auth-form';

describe('Auth Form Component', () => {
  test('Auth form component exists', () => {
    let wrapper = Enzyme.shallow(<AuthFormContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('should show previous state', () => {
    const initialState = {
      route: '/',
    };

    expect(mapStateToProps(initialState).route).toBe('/');
  });

  test('should call an action creator when login button is clicked', () => {
    const dispatch = jest.fn();
    const user = {};

    mapDispatchToProps(dispatch).loginRequest(user);
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });

  test('should call an action creator when signup button is clicked', () => {
    const dispatch = jest.fn();
    const user = {};

    mapDispatchToProps(dispatch).signupRequest(user);
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });

});