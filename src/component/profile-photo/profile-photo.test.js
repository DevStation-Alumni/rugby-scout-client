import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import ProfilePhoto from './profile-photo';

describe('ProfilePhoto Component', () => {

  test('ProfilePhoto component exists', () => {
    let wrapper = Enzyme.shallow(<ProfilePhoto />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('should show changes on file input', () => {

    let onChange = sinon.spy(ProfilePhoto.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ProfilePhoto />);
    const event = {
      target: {
        name: 'profilePhoto',
        files: [new Blob(['slardy.png'], { type: 'text/plain' })],
      },
    };

    wrapper.find('input[name="profilePhoto"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should call prop function on submit', () => {
    let onSubmit = sinon.spy(ProfilePhoto.prototype, 'handleSubmit');

    let photoSubmit = sinon.fake();

    let wrapper = Enzyme.shallow(<ProfilePhoto photoSubmit={photoSubmit} />);
    const event = {
      preventDefault: jest.fn(),
    };

    wrapper.find('form').simulate('submit', event);

    expect(onSubmit.callCount).toBe(1);
    expect(photoSubmit.callCount).toBe(1);
    onSubmit.restore();
  });
});