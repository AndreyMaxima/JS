function assign() {
  const firstObj = {
    any: 'value',
    key: 22
  }
  const secondObj = {
    secondKey: 'val',
    foo: 'bar',
    key: 10
  }
  const assignObj = _.assign({ // Объединение объектов
    assignKey: 'assign'
  }, firstObj, secondObj)
  console.log(assignObj)
}

function firstLast() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const first = _.first(arr) // Вернуть первый элемент массива
  const last = _.last(arr) // Вернуть последний элемент массива
  console.log(first)
  console.log(last)
}

function find() {
  const arr = [
    {
      name: 'Анатолий',
      gender: 'м',
      birthday: '25.02.1999',
      age: 15
    },
    {
      name: 'Женя',
      gender: 'м',
      birthday: '26.02.1999',
      age: 20
    },
    {
      name: 'Женя',
      gender: 'ж',
      birthday: '27.02.1999',
      age: 13
    },
    {
      name: 'Женя',
      gender: 'ж',
      birthday: '20.02.1999',
      age: 10
    },
    {
      name: 'Гриша',
      gender: 'ж',
      birthday: '28.02.1999',
      age: 22
    },
  ];
  const result = _.find(arr, { // Поиск в массиве
    name: 'Женя', // Часть объекта, которая должна совпадать
    gender: 'ж'
  })
  console.log(result)

  const noresult = _.find(arr, { // Поиск в массиве
    name: 'НетТАкого',
    gender: 'ж'
  })
  console.log(noresult)
  const lastResult = _.find(arr, (user) => user.age >= 18)
  console.log(lastResult)
}

function chunk() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const resultArr = _.chunk(arr, 2)
  console.log(resultArr)
}

function slice() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const result = _.slice(arr,
    2, // Индекс начала
    5 // Индекс конца (не включает элемент за данным индексом)
  )
  console.log(result)
}

function random() {
  console.log(_.random(
    100 // Генерация случайного числа от 0 до 100
  ))
  console.log(_.random(50, 100)) // Генерация случайного числа от 50 до 100
}

function keyBy() {
  const arr = [
    {
      id: '22',
      name: 'Анатолий',
      gender: 'м',
      birthday: '25.02.1999',
      age: 15
    },
    {
      id: '33',
      name: 'Женя',
      gender: 'м',
      birthday: '26.02.1999',
      age: 20
    },
    {
      id: '44',
      name: 'Женя',
      gender: 'ж',
      birthday: '27.02.1999',
      age: 13
    },
    {
      id: '55',
      name: 'Женя',
      gender: 'ж',
      birthday: '20.02.1999',
      age: 10
    },
    {
      id: '66',
      name: 'Гриша',
      gender: 'м',
      birthday: '28.02.1999',
      age: 22
    },
    {
      id: '66',
      name: 'НеГриша',
      gender: 'м',
      birthday: '28.02.1999',
      age: 25
    },
  ];
  const resultObj = _.keyBy(arr, "id"); // Преобразовать массив в объект, где ключ - значение переданного поля в соответствующем объекте
  console.log(resultObj)
  console.log(resultObj['33'])
}

function shuffle() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  console.log(_.shuffle(arr)) // Перемешать массив
  console.log(_.shuffle(arr))
  console.log(_.shuffle(arr))
  console.log(_.shuffle(arr))
}

function reduce() {
  const arr = [
    {
      id: '22',
      name: 'Анатолий',
      gender: 'м',
      birthday: '25.02.1999',
      age: 15
    },
    {
      id: '33',
      name: 'Женя',
      gender: 'м',
      birthday: '26.02.1999',
      age: 20
    },
    {
      id: '44',
      name: 'Женя',
      gender: 'ж',
      birthday: '27.02.1999',
      age: 13
    },
    {
      id: '55',
      name: 'Женя',
      gender: 'ж',
      birthday: '20.02.1999',
      age: 10
    },
    {
      id: '66',
      name: 'Гриша',
      gender: 'м',
      birthday: '28.02.1999',
      age: 22
    },
    {
      id: '66',
      name: 'НеГриша',
      gender: 'м',
      birthday: '28.02.1999',
      age: 25
    },
  ];
  const older18 = _.reduce(arr,
    (acc, val) => {
      val.age >= 18 && acc++
      return acc
    },
    0
  )
  console.log(older18)
}

function times() {
  const func = () => console.log('hello');
  _.times( // Вызвать функцию несколько раз
    5, // Кол-во раз
    func // Вызываемая функция
  )
}

function delay() {
  const func = () => console.log('hello');
  console.log('start')
  _.delay( // Задержка перед выполнением функции
    func, // Выполняемая функция
    2000 // Задержка в милисекундах
  )
}

function range() {
  console.log(
    _.range(100) // Сгенерировать массив чисел от 0 до 99
  )
  console.log(
    _.range(50, 100) // Сгенерировать массив чисел от 50 до 99
  )
  console.log(
    _.range(50, 100, 5) // Сгенерировать массив чисел от 50 до 95 c шагом в 5
  )
}

function minMax() {
  const arr = [0, -3, 250, 66, 12];
  console.log(_.min(arr)) // Вернуть минимальное значение
  console.log(_.max(arr)) // Вернуть максимальное значение
  const objArr = [
    {a: 0}, {a: -25}, {a: 250, b:'some-value'}, {a: -40, b:'any-value'}, {a: 3}
  ]
  console.log(
    _.minBy( // Найти объект с минимальным значением поля в массиве
      objArr, // Массив
      'a' // Имя поля
    )
  )
  console.log(
    _.maxBy( // Найти объект с максимальным значением поля в массиве
      objArr, // Массив
      'a' // Имя поля
    )
  )
}

function sum() {
  const arr =[0,12,343345,11,2,-500000000]
  console.log(
    _.sum(arr) // Вычислить сумму элементов массива
  )
}

function stringCase() {
  const arr = [
    'somE valUe to ConVert',
    'someWords',
    'some-words-to-convert',
    'some',
    'Any',
    'Any text'
  ]
  console.log(
    _.camelCase('any words to convert')
  )
  console.log(
    _.map(arr, _.camelCase)
  )
  console.log(
    _.map(arr, _.capitalize)
  )
  console.log(
    _.map(arr, _.kebabCase)
  )
  console.log(
    _.map(arr, _.lowerCase)
  )
  console.log(
    _.map(arr, _.upperCase)
  )
}

function startsEndsWith() {
  console.log(_.startsWith( // Начинается ли строка с подстроки
    'any-string', // Строка
    'any' // Подстрока
  ))
  console.log(_.startsWith('any-string', 'bany'))
  console.log(_.endsWith('any-string', 'string'))
  console.log(_.endsWith('any-string', 'bring'))
}

function objects() {
  const obj = {
      id: '66',
      name: 'Гриша',
      gender: 'м',
      birthday: '28.02.1999',
      age: 22
  }
  console.log(_.keys(obj))
  console.log(_.values(obj))
  console.log(_.entries(obj))
  _.forIn(obj,
    (value, key) => console.log(`${key}: ${value}`)
    )
}

function isAny() {
  const arr = [{any: 'value'}, 123, NaN, undefined, [1,2,3,4,5], 'string', null]
  console.log(
    _.map(arr, _.isNumber)
  )
  console.log(
    _.map(arr, _.isString)
  )
  console.log(
    _.map(arr, _.isArray)
  )
  console.log(
    _.map(arr, _.isObject)
  )
  console.log(
    _.map(arr, _.isNull)
  )
  console.log(
    _.map(arr, _.isUndefined)
  )
}

function curry() {
  const func = (a,b,c,d) => a + b + c + d;
  const curryFunc = _.curry(func)
  console.log(curryFunc(5)(5)(5)(5))
}

