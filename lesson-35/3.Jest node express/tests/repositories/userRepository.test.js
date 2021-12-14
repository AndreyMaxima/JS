const repository = require('../../src/repositories/usersRepository')
const userApi = require('../../src/api/simpleApi/userApi')
jest.spyOn(userApi, 'getUserList')

describe('UsersRepository', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('getUserListThirdParty: should return resolved', (done) => {
    userApi.getUserList.mockResolvedValue(JSON.stringify({
      data: [{
        name: 'Andreas',
        lastName: 'Valent',
        type: 1
      }, {
        name: 'Oleg',
        lastName: 'Ivanov',
        type: 2
      }]
    }))
    repository.getUserListThirdParty()
      .then(result => {
        expect(result)
          .toEqual([{
            fullname: 'Andreas Valent',
            role: 'ADMIN'
          }, {
            fullname: 'Oleg Ivanov',
            role: 'MODER'
          }])
        done()
      })
  })

  test('should return rejected with api error', (done) => {
    const errorDesc = 'SOME ERROR'
    userApi.getUserList.mockResolvedValue(JSON.stringify({ error: errorDesc }))
    repository.getUserListThirdParty().catch(error => {
      expect(error)
        .toBe(errorDesc)
      done()
    })
  })

  test('should return rejected with fetch error', (done) => {
    const errorDesc = 'SOME ERROR'
    userApi.getUserList.mockRejectedValue(errorDesc)
    repository.getUserListThirdParty().catch(error => {
      expect(error)
        .toBe(errorDesc)
      done()
    })
  })

  test('should return rejected with empty fetch', (done) => {
    const errorDesc = 'SOME ERROR'
    userApi.getUserList.mockRejectedValue(errorDesc)
    repository.getUserListThirdParty().catch(error => {
      expect(error)
        .toBe(errorDesc)
      done()
    })
  })
})
