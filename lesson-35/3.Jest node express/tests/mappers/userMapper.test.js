const {mapThirdPartyUsersToUsers} = require('../../src/mappers/userMapper')

describe('userMapper', () => {
  test('mapThirdPartyUsersToUsers: should to be success', () => {
    const input = [{name: 'Andreas', lastName: 'Valent', type: 1}, {name: 'Oleg', lastName: 'Ivanov', type: 2}]
    const expected = [{fullname: 'Andreas Valent', role: 'ADMIN'}, { fullname: 'Oleg Ivanov', role: 'MODER'}]
    expect(mapThirdPartyUsersToUsers(input)).toEqual(expected)
  })

  test('mapThirdPartyUsersToUsers: should to be success with undefined', () => {
    expect(mapThirdPartyUsersToUsers()).toBeNull()
  })
})
