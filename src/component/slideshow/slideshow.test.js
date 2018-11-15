import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import Slideshow from './slideshow';

describe('Slideshow Component', () => {

  test('Slideshow component exists', () => {
    let wrapper = Enzyme.shallow(<Slideshow />);

    expect(wrapper.exists()).toBeTruthy();
  });
});