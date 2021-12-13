const { getRoleByType } = require('../../src/utils/usersUtils')

describe('getRoleByType', () => {
  test('getRoleByType success', () => {
    expect(getRoleByType(null)).toBe('UNKNOWN')
    expect(getRoleByType()).toBe('UNKNOWN')
    expect(getRoleByType(NaN)).toBe('UNKNOWN')
    expect(getRoleByType(0)).toBe('UNKNOWN')
    expect(getRoleByType(1)).toBe('ADMIN')
    expect(getRoleByType(2)).toBe('MODER')
    expect(getRoleByType(3)).toBe('UNKNOWN')
  })
});
