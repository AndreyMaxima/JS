const { callbackInvoker } = require('./asyncUtils.js')

describe('callbackInvocker via jest.fn()', () => {
  test('should call setTimeout with 100ms delay', () => {
    setTimeout = jest.fn( // Устанавливаем значение функции как mock-функцию (для предотвращения воздействий на другие тесты, в конце надо вернуть обратно)
      (a, b) => console.log(`Second param is ${b}`) // Установка реализации подменяемой функцией
    ) // Замена setTimeout на mock-функцию
    callbackInvoker(() => {})
    expect(setTimeout).toBeCalled() // Проверка, на то, что mock-функция была вызвана 1 или более раз
    expect(setTimeout).toBeCalledTimes(1) // Проверка, на то, что mock-функция была вызвана указанное кол-во раз
    expect(setTimeout).toBeCalledWith( // Проверка, на то, что функция была вызвана с указанными аргументами
      expect.any(Function),  // Лубая функция
      100
    )
  })

  test('should call setTimeout with 100ms delay via setTimeout implementation', (done) => {
    setTimeout = jest.fn((callback, timeout) => {
      expect(timeout).toBe(100)
      console.log(`Second param is ${timeout}`)
      done()
    })
    callbackInvoker(() => {})
  })
})

describe('callbackInvoker', () => {
  jest.spyOn(global, 'setTimeout')

  afterEach(() => { // После каждого теста
    jest.clearAllMocks(); // Сбрасывает информацию о вызовах всех mock-функций (обёрнутых через jest.spyOn)
    // setTimeout.mockClear() // Сбрасывает информацию о вызовах
    // setTimeout.mockRestore() // Сбрасывает информацию о вызовах и возвращает исходную реализацию
  })

  test('should call setTimeout with 100ms delay', () => {
    callbackInvoker(() => {})
    expect(setTimeout).toBeCalled()
    expect(setTimeout).toBeCalledTimes(1)
    expect(setTimeout).toBeCalledWith(
      expect.any(Function),
      100
    )
  })
  test('should call setTimeout with 100ms delay via jest.spyOn', (done) => {
    jest.spyOn(
      global, // Модуль
      'setTimeout' // Название метода модуля (строка)
    )
    setTimeout.mockName('setTimeout')
    const callback = (str) => {
      expect(str).toBe('SUCCESS')
      done()
    }
    callbackInvoker(callback)
    expect(setTimeout).toBeCalled()
    expect(setTimeout).toBeCalledTimes(1)
    expect(setTimeout).toBeCalledWith(expect.any(Function), 100)
  })
})

describe('mock function methods introduction', () => {
  test('introduction', () => {
    const mockedFunction = jest.fn()
      .mockName('mockedFunction') // Назначение mock-имени
    expect(
      mockedFunction.getMockName() // Получить имя mock-функции (назначенное через .mockName)
    ).toBe('mockedFunction')
    mockedFunction.mockImplementation(() => console.log('mocked timeout invoked')) // Задать реализацию mock-функции

    jest.spyOn(console, 'error');
    console.error.mockImplementationOnce(() => console.log('MOCKED IMPLEMMENTATION OF CONSOLE ERROR')) // Задать реализацию mock-функции для следующего вызова
    console.error('FIRST TIME') // FIRST TIME не будет выведено, т.к. реализация заменена в строке выше
    console.error('SECOND TIME') // SECOND TIME будет выведено, т.к. применена изначальная реализация реализация

    mockedFunction()
    expect(mockedFunction).toBeCalledTimes(1)
    expect(
      jest.isMockFunction(mockedFunction) // Является ли функция mock-функцией
    ).toBeTruthy()
    expect(jest.isMockFunction(setInterval)).toBeFalsy()

  })
  test('prop mockFn.mock', () => {
    const mockFn = jest.fn((n) => {
      return `Переданно ${n}`
    })
    mockFn(1, 'FIRST CALL', 'FIRST CALL SECOND PARAM')
    mockFn(2, 'SECOND CALL', 'SECOND CALL SECOND PARAM')
    console.log(
      mockFn.mock.calls // Массив с массивами с параметрами для каждого совершённого вызова mock-функции
    )
    console.log(
      mockFn.mock.results // Массив с массивами с результатами работы mock-функции
    )

    const a = new mockFn()
    const b = new mockFn()
    expect(a).toBe(mockFn.mock.instances[2])
    expect(b).toBe(mockFn.mock.instances[3])
  })

  test('synt sugar', () => {
    //--------------------------------------------
    jest.fn().mockReturnThis()
    jest.fn(function () {
      return this
    })
    //--------------------------------------------
    const a = jest.fn().mockReturnValue('MOCKED VALUE')
    const b = jest.fn(() => 'MOCKED VALUE')
    expect(a()).toBe(b())
    //--------------------------------------------
    const chainReturn = jest.fn().mockReturnValue('default value')
      .mockReturnValueOnce('first')
      .mockReturnValueOnce('second')
      .mockReturnValueOnce('third')
    expect(chainReturn()).toBe('first')
    expect(chainReturn()).toBe('second')
    expect(chainReturn()).toBe('third')
    expect(chainReturn()).toBe('default value')
    expect(chainReturn()).toBe('default value')
    //---------------------------------------------
  })

  test('promises sugar', async () => {
    const resolvedPromiseFn = jest.fn(() => Promise.resolve('Any resolve value'))
    const resolvedPromiseFn2 = jest.fn().mockResolvedValue('Any resolve value')
    expect(await resolvedPromiseFn()).toEqual(await resolvedPromiseFn2())
    //---------------------------------------------------------------------
    const resolvePromiseChain = jest.fn().mockResolvedValue('default value')
      .mockResolvedValueOnce('1')
      .mockResolvedValueOnce('2')
      .mockResolvedValueOnce('3')
    expect(await resolvePromiseChain()).toBe('1')
    expect(await resolvePromiseChain()).toBe('2')
    expect(await resolvePromiseChain()).toBe('3')
    expect(await resolvePromiseChain()).toBe('default value')
    expect(await resolvePromiseChain()).toBe('default value')
    expect(await resolvePromiseChain()).toBe('default value')
  })
})
