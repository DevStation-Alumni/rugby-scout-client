import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import LandingContainer from './landing';

describe('Landing Component', () =>{

  test('Landing component exists', () => {

    let wrapper = Enzyme.shallow(<LandingContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});