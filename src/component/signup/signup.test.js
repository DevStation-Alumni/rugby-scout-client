import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import SignupForm from './signup.js';

describe('Signup form component', () =>{

  test('Signup form component exists', () => {
    let wrapper = Enzyme.shallow(<SignupForm />);

    expect(wrapper.exists()).toBeTruthy();
  });
});