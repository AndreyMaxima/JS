const { sum, returnNull, isNumberMoreZero, throwErrorIfFalseElseReturnParam } = require('./utils')

describe('function Sum', () => {
  test('should sum numbers', () => { // Объявление теста
    expect(
      sum(2, 2) //Тестируемое значение
    ).toBe(4) // Ожидаемый результат
    expect(sum(-100, 10)).toBe(-90)
    expect(sum(0, 0)).toBe(0)
    expect(sum(1000000, 200000000)).toBe(201000000)
  })

  it('should sum strings as numbers', () => {
    expect(sum('2', '2')).toBe(4)
    expect(sum('2', 2)).toBe(4)
    expect(sum('-200', 2)).toBe(-198)
    expect(sum('0', 2)).toBe(2)
  })

  it('should sum not a numbers as 0', () => {
    expect(sum(NaN, '2')).toBe(2)
    expect(sum('2', [])).toBe(2)
    expect(sum({}, {})).toBe(0)
    expect(sum('0')).toBe(0)
    expect(sum('6', null)).toBe(6)
    expect(sum(null, null)).toBe(0)
  })

  it('should sum float', () => {
    expect(sum(0.2, 0.1)).toBeCloseTo(0.3) // Используем toBeCloseTo для десятичных дробей
    expect(sum(-0.2, 0.1)).toBeCloseTo(-0.1) // Используем toBeCloseTo для десятичных дробей
    expect(sum(1000.2, 0.1)).toBeCloseTo(1000.3) // Используем toBeCloseTo для десятичных дробей
  })

})

describe('function returnNull', () => {
  it('should return null', () => {
    expect(returnNull()).toBe(null)
    expect(returnNull()).toEqual(null)
    expect(returnNull()).toBeNull() // Проверка на null
  })
})

describe('function isNumberMoreZero', () => {
  it('should return true', () => {
    expect(isNumberMoreZero(10)).toBeTruthy();
    expect(isNumberMoreZero(10)).toBe(true);
    expect(isNumberMoreZero(10)).toEqual(true);
  })

  it('should return false', () => {
    expect(isNumberMoreZero(-10)).toBeFalsy();
    expect(isNumberMoreZero(0)).toBe(false);
    expect(isNumberMoreZero(-10)).toEqual(false);
  })
})

describe('throwErrorIfFalseElseReturnParam', () => {
  expect(throwErrorIfFalseElseReturnParam(null)).toBeNull()
  expect(throwErrorIfFalseElseReturnParam(undefined)).toBeUndefined()
  expect(throwErrorIfFalseElseReturnParam(10)).toBe(10)
  const obj = { any: 'value'}
  expect(throwErrorIfFalseElseReturnParam(obj)).toBe(obj)
  const str = 'string'
  expect(throwErrorIfFalseElseReturnParam(str)).toBe(str)
  expect(throwErrorIfFalseElseReturnParam(true)).toBeTruthy()
  expect(() => throwErrorIfFalseElseReturnParam(false)).toThrow()
  expect(() => throwErrorIfFalseElseReturnParam(false)).toThrow('param is false')
  expect(() => throwErrorIfFalseElseReturnParam(false)).toThrow(/p/)
  expect(() => throwErrorIfFalseElseReturnParam(false)).not.toThrow('another text')
})













describe('demonstrations', () => {
  test('numbers', () => {
    expect(10).toBeGreaterThan(9) // Больше чем
    expect(10).toBeGreaterThanOrEqual(10) // Больше или равно
    expect(10).toBeLessThan(11) // Меньше
    expect(10).toBeLessThanOrEqual(10) // Меньше или равно
    expect(10).toBe(10) // равно
    expect(10).toEqual(10) // Равно
    expect(0.3).toBeCloseTo(0.3) // Используем toBeCloseTo для десятичных дробей
  })

  test('string', () => {
    expect('Any String').toMatch(/^A/)
  })

  test('objects', () => {
    expect({any: 'string', obj: { key: 'val'}}).toEqual({any: 'string', obj: { key: 'val'}})
    expect({
      any: 'value',
      // b: undefined
    }).toStrictEqual( // Проверка с учётом неопределённых свойств
      {
        any: 'value'
      }
    )
  })

  test('arrays', () => {
    const arr = [1, 2, 3, 'any', 'value', { any: 'value'} ]
    expect(arr).toContain('value')
    expect(arr).not.toContain('no exist')
    expect(arr).not.toContain({ any: 'value'})
    expect(arr).toContainEqual({ any: 'value'}) // Для ссылочных типов
  })

})
