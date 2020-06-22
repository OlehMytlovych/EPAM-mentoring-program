import * as fromFilter from './filter.actions';

describe('professionals filters', () => {
  it('should return a change category action', () => {
    expect(fromFilter.ChangeCategory({ data: 'testCategory' }).type).toBe('[Professionals Filter] Change Professionals Category');
  });

  it('should return a quick filter action', () => {
    expect(fromFilter.changeQuickFilter({ data: 'testQuery' }).type).toBe('[Professionals Filter] Change Professionals Quick Filter');
  });
});
