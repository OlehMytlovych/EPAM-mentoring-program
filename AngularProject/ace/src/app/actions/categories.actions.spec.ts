import * as fromCategories from './categories.actions';

describe('loadCategories', () => {
  it('should return an action', () => {
    expect(fromCategories.loadCategories().type).toBe('[Categories] Load Categories');
  });
});
