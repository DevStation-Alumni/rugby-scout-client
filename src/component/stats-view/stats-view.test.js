import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import StatsView from './stats-view';

describe('StatsView Component', () => {

  test('Stats component exists', () => {
    let wrapper = Enzyme.shallow(<StatsView />);

    expect(wrapper.exists()).toBeTruthy();
  });
});