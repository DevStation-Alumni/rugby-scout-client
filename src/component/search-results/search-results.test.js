import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import {SearchResultsContainer} from './search-results';

describe('Auth Form Component', () =>{

  test('Auth form component exists', () => {

    let wrapper = Enzyme.shallow(<SearchResultsContainer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});