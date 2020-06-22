import * as fromLoading from './loading.actions';

describe('loading action', () => {
  it('should return a set loading true action', () => {
    expect(fromLoading.setLoadingTrue().type).toBe('[Loading] Set LoadingTrue');
  });

  it('should return a set loading false action', () => {
    expect(fromLoading.setLoadingFalse().type).toBe('[Loading] Set LoadingFalse');
  });
});
