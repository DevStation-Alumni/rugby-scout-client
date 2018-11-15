import { statsUpdate, statsUpdateRequest, statsSet } from './stats';
import * as utils from '../lib/util';

describe('statsSet action', () => {
  let mockStats = {stat: '1'};

  test('should show that statsSet action returns an object', () => {
    let actual = statsSet(mockStats);

    expect(typeof actual).toBe('object');
  });

  test('should show that stats object includes a type statsSet and payload ', () => {
    let actual = statsSet(mockStats);

    expect(actual.type).toBe('STATS_SET');
    expect(actual.payload).toEqual({stat: '1'});
  });
});

describe('StatsUpdate action', () =>{
  let mockStats = {stat: '1'};
  
  test('should show that statsUpdate action returns an object', () => {
    let actual = statsUpdate(mockStats);

    expect(typeof actual).toBe('object');
  });

  test('should show that statsUpdate object includes a type statsUpdate and payload ', () => {
    let actual = statsUpdate(mockStats);

    expect(actual.payload).toEqual({stat: '1'});
    expect(actual.type).toBe('STATS_UPDATE');
  });
});
