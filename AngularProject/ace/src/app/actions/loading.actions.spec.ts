import * as fromLoading from './loading.actions';

describe('loadLoadings', () => {
  it('should return an action', () => {
    expect(fromLoading.loadLoadings().type).toBe('[Loading] Load Loadings');
  });
});
