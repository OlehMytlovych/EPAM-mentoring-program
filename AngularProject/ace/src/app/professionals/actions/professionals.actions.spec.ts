import * as fromProfessionals from './professionals.actions';

describe('loadProfessionalss', () => {
  it('should return an action', () => {
    expect(fromProfessionals.loadProfessionals().type).toBe('[Professionals] Load Professionalss');
  });
});
