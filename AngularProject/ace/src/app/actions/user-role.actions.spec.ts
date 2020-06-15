import * as fromUserRole from './user-role.actions';

describe('loadUserRoles', () => {
  it('should return an action', () => {
    expect(fromUserRole.loadUserRoles().type).toBe('[UserRole] Load UserRoles');
  });
});
