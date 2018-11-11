import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import { AboutContainer } from './index.js';

describe('About Component', () => {

  test('About component exists', () => {
    let wrapper = Enzyme.shallow(<AboutContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});