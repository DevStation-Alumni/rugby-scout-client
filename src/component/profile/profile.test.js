import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import {ProfileContainer} from './profile';

describe('Profile Component', () =>{

  test('Profile component exists', () => {

    let wrapper = Enzyme.shallow(<ProfileContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});