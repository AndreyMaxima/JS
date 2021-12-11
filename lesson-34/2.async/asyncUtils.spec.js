const { callbackInvoker, mockFetch } = require('./asyncUtils')
describe('callbackInvoker', () => {
  test('should invoke callback with SUCCESS string', (done) => {
    const callback = (str) => {
      console.log('callback invoked')
      expect(str).toBe('SUCCESS')
      done()
    }
    callbackInvoker(callback)
  })
})

describe('mockFetch', () => {
  test('should return success promise with SUCCESS string', () => {
    expect.assertions(1) // Ожидаемое кол-во проверок
    return mockFetch(true) // Обязательно вернуть промис
      .then(str => expect(str).toBe('SUCCESS'))
  })
  test('should return error promise with ERROR string', () => {
    expect.assertions(1) // Ожидаемое кол-во проверок
    return mockFetch(false) // Обязательно вернуть промис
      .catch(str => expect(str).toBe('ERROR'))
  })

  test('should return success promise with SUCCESS via resolves', () => {
    return expect(mockFetch(true)).resolves.toBe('SUCCESS')
  })

  test('should return error promise with ERROR message via rejects', () => {
    return expect(mockFetch(false)).rejects.toBe('ERROR')
  })

  test('should return success promise with SUCCESS via async/await', async () => {
    const data = await mockFetch(true)
    expect(data).toBe('SUCCESS')
  })

  test('should return error promise with ERROR message via async/await', async() => {
    expect.assertions(1)
    try {
      await mockFetch(false)
    } catch (e) {
      expect(e).toBe('ERROR')
    }
  })

  test('should return success promise with SUCCESS via async/await and resolves', async () => {
    await expect(mockFetch(true)).resolves.toBe('SUCCESS')
  })

  test('should return error promise with ERROR message via async/await and rejects', async() => {
    await expect(mockFetch(false)).rejects.toBe('ERROR')
  })
})
