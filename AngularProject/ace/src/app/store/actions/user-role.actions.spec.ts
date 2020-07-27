import * as fromUserRole from './user-role.actions';

describe('setUserRoles action', () => {
  it('should return a set userRole action', () => {
    expect(fromUserRole.setUserRole({ data: 3 }).type).toBe('[UserRole] Set UserRole');
  });
  it('should return a reset userRole action', () => {
    expect(fromUserRole.resetUserRole().type).toBe('[UserRole] Reset UserRole');
  });
});
