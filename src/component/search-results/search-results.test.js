import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import SearchResultsContainer from './search-results';

describe('SearchResultsContainer Component', () => {

  test('SearchResultsContainer component exists', () => {
    const result = {
      imageSrc: '',
      firstName: '',
      lastName: '',
    };

    const results = [result];

    let wrapper = Enzyme.shallow(<SearchResultsContainer results={results} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});