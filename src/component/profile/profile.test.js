import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import ProfileContainer from './profile';

describe('Profile Component', () => {

  test('Profile component exists', () => {

    let wrapper = Enzyme.shallow(<ProfileContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('should show changes on firstName input', () => {

    let onChange = sinon.spy(ProfileContainer.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ProfileContainer />);
    const event = {
      target: {
        name: 'firstName',
        value: 'Slardy',
      },
    };

    wrapper.find('input[name="firstName"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on lastName input', () => {

    let onChange = sinon.spy(ProfileContainer.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ProfileContainer />);
    const event = {
      target: {
        name: 'lastName',
        value: 'Bartfast',
      },
    };

    wrapper.find('input[name="lastName"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on role input', () => {

    let onChange = sinon.spy(ProfileContainer.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ProfileContainer />);
    const event = {
      target: {
        name: 'role',
        value: 'player',
      },
    };

    wrapper.find('input[name="role"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on bio input', () => {

    let onChange = sinon.spy(ProfileContainer.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ProfileContainer />);
    const event = {
      target: {
        name: 'bio',
        value: 'Hi, I am Slardy!',
      },
    };

    wrapper.find('textarea[name="bio"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

});