import * as fromFilter from './filter.actions';

describe('loadFilters', () => {
  it('should return an action', () => {
    expect(fromFilter.loadFilters().type).toBe('[Filter] Load Filters');
  });
});
