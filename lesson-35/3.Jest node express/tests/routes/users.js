const request = require('supertest')
const app = require('../../src/app')
const userApi = require('../../src/api/simpleApi/userApi')
jest.mock('../../src/api/simpleApi/userApi')

describe('users router', () => {

  test('getUserList: should return user list', async () => {
    userApi.getUserList.mockResolvedValue(JSON.stringify(
      {
        data: [{
          name: 'Andreas',
          lastName: 'Valent',
          type: 1
        }, {
          name: 'Oleg',
          lastName: 'Ivanov',
          type: 2
        }]
      }
    ))
    const result = await request(app)
      .get('/api/users/getUserList')
      .send()
    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual([{"fullname": "Andreas Valent", "role": "ADMIN"}, {"fullname": "Oleg Ivanov", "role": "MODER"}])
  })

  test('getUserList: simpleApi error. Should return error', async () => {
    const errorDesc = 'SIMPLE API ERROR'
    userApi.getUserList.mockResolvedValue(JSON.stringify(
      { error: errorDesc}
    ))
    const result = await request(app)
      .get('/api/users/getUserList')
      .send()
    expect(result.statusCode).toBe(520)
    expect(result.text).toEqual(JSON.stringify(errorDesc))
  })

  test('getUserList: fetch to simpleApi error. Should return error', async () => {
    const errorDesc = 'FETCH ERROR'
    userApi.getUserList.mockRejectedValue(errorDesc)
    const result = await request(app)
      .get('/api/users/getUserList')
      .send()
    expect(result.statusCode).toBe(520)
    expect(result.text).toEqual(JSON.stringify(errorDesc))
  })

  test('createUser: should return id of created user', async () => {
    const expectedId = '435345234afadfgawe'
    userApi.createUser.mockResolvedValue(JSON.stringify(
      {
        status: 'ok',
        id: expectedId
        }
    ))
    const result = await request(app)
      .post('/api/users/createUser')
      .send({
        name: 'Any',
        lastName: 'anyLastName'
      })
      .send()
    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual({ status: 'ok', id: expectedId })
  })

  test('createUser: fetch simpleApi error', async () => {
    userApi.createUser.mockRejectedValue(JSON.stringify('ERROR'))
    const result = await request(app)
      .post('/api/users/createUser')
      .send({
        name: 'Any',
        lastName: 'anyLastName'
      })
    expect(result.statusCode).toBe(520)
    expect(result.body).toEqual("ERROR")
  })

})
