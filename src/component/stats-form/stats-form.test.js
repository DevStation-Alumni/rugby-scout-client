import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import StatsForm from './stats-form';

describe('Stats form component', () =>{

  test('Stats form component exists', () => {
    let wrapper = Enzyme.shallow(<StatsForm />);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('should show changes on wins input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'wins',
      value: 5,
    }};

    wrapper.find('input[name="wins"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().wins).toBe(5);
    onChange.restore();
  });

  test('should show changes on losses input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'losses',
      value: 5,
    }};

    wrapper.find('input[name="losses"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().losses).toBe(5);
    onChange.restore();
  });

  test('should show changes on tries input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'tries',
      value: 5,
    }};

    wrapper.find('input[name="tries"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().tries).toBe(5);
    onChange.restore();
  });

  test('should show changes on conversions input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'conversions',
      value: 5,
    }};

    wrapper.find('input[name="conversions"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().conversions).toBe(5);
    onChange.restore();
  });

  test('should show changes on penaltyGoals input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'penaltyGoals',
      value: 5,
    }};

    wrapper.find('input[name="penaltyGoals"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().penaltyGoals).toBe(5);
    onChange.restore();
  });

  test('should show changes on dropGoals input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'dropGoals',
      value: 5,
    }};

    wrapper.find('input[name="dropGoals"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().dropGoals).toBe(5);
    onChange.restore();
  });

  test('should show changes on tackles input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'tackles',
      value: 5,
    }};

    wrapper.find('input[name="tackles"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().tackles).toBe(5);
    onChange.restore();
  });

  test('should show changes on offloads input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'offloads',
      value: 5,
    }};

    wrapper.find('input[name="offloads"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().offloads).toBe(5);
    onChange.restore();
  });

  test('should show changes on handlingErrors input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'handlingErrors',
      value: 5,
    }};

    wrapper.find('input[name="handlingErrors"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().handlingErrors).toBe(5);
    onChange.restore();
  });

  test('should show changes on runMeters input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'runMeters',
      value: 5,
    }};

    wrapper.find('input[name="runMeters"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().runMeters).toBe(5);
    onChange.restore();
  });

  test('should show changes on lineBreaks input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'lineBreaks',
      value: 5,
    }};

    wrapper.find('input[name="lineBreaks"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().lineBreaks).toBe(5);
    onChange.restore();
  });

  test('should show changes on penaltiesConceded input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'penaltiesConceded',
      value: 5,
    }};

    wrapper.find('input[name="penaltiesConceded"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().penaltiesConceded).toBe(5);
    onChange.restore();
  });

  test('should show changes on yellowCards input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'yellowCards',
      value: 5,
    }};

    wrapper.find('input[name="yellowCards"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().yellowCards).toBe(5);
    onChange.restore();
  });

  test('should show changes on redCards input', () => {
  
    let onChange = sinon.spy(StatsForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<StatsForm />);
    const event = {target: {
      name: 'redCards',
      value: 5,
    }};

    wrapper.find('input[name="redCards"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    expect(wrapper.state().redCards).toBe(5);
    onChange.restore();
  });

});