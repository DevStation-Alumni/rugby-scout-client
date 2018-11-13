import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import {AuthFormContainer} from './auth-form';

describe('Auth Form Component', () =>{

  test('Auth form component exists', () => {
    let wrapper = Enzyme.shallow(<AuthFormContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});