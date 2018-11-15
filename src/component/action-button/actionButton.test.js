import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import ActionButton from './actionButton';

describe('ActionButton Component', () => {

  test('ActionButton component exists', () => {
    const src = '';
    const query = '';
    const api = {
      fetchResultsRequest: jest.fn(),
    };

    let wrapper = Enzyme.shallow(<ActionButton src={src} api={api} query={query} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('ActionButton handleClick calls prop function', () => {
    const src = '';
    const query = '';
    const api = {
      fetchResultsRequest: jest.fn(),
    };

    let wrapper = Enzyme.shallow(<ActionButton src={src} api={api} query={query} />);

    wrapper.simulate('click');

    expect(api.fetchResultsRequest).toBeCalled();
  });
});