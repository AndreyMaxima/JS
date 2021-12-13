// jest.enableAutomock()
// const token = require('./token')
//
// jest.unmock('./utils')
// const utils = require('./utils')
//
// describe('modules mock', () => {
//   test('utils.authorize', () => {
//     utils.authorize('validpass')
//     expect(token.getToken).toBeCalled()
//   })
// })

jest.mock('./token', () => ({
  getToken: jest.fn(() => 'ne token')
}))
const mockToken = require('./token')
const token = jest.requireActual('./token')
const utils = require('./utils')

test('utils', () => {
  expect(utils.authorize('validpass')).toBe('ne token')
  expect(jest.isMockFunction(token.getToken)).toBeFalsy()
  expect(jest.isMockFunction(mockToken.getToken)).toBeTruthy()
})
