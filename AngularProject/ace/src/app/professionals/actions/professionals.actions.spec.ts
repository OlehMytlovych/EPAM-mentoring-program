import * as fromProfessionals from './professionals.actions';

describe('loadProfessionals', () => {
  it('should return an action', () => {
    expect(fromProfessionals.loadProfessionals().type).toBe('[Professionals] Load Professionals');
  });
});
