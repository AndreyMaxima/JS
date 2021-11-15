function* generateNumbers() { // Объявление функции-генератора
  console.log('Now will be 5')
  yield 5;
  console.log('Now will be 10')
  yield 10;
  console.log('Now will be 15')
  yield 15;
  console.log('Now will be done')
  return 'done'
  yield 20; // Данное значение будет проигнорировано, т.к. перед ним был прописан return
}

const firstGenerator = generateNumbers(); // Функция возвращает генератор
console.group('firstGenerator')
console.log(
  firstGenerator.next() // Выполнения метода next генератора выполнит код функции до первого yield и вернёт объект { value: 5, done: false }
)

console.log(
  firstGenerator.next() // Будет выолнена часть кода функции между первым и вторым yield
)

console.log(
  firstGenerator.next() // Будет выолнена часть кода функции между вторым и третьи yield
)

console.log(
  firstGenerator.next() // Будет выолнена часть кода функции между вторым и третьи yield
)
console.groupEnd()

const secondGenerator = generateNumbers(); // Не связан с generator

console.group('secondGenerator')
for(let genValue of secondGenerator) {
  console.log(genValue) // genValue - значения value озвращённого объекта (значение, возвращённое через return не попадает)
}
console.groupEnd()

function* firstPartGen() {
  yield 1
  yield 2
  yield 3
  yield* secondPartGen() // Передать исполнение другому генертору
}

function* secondPartGen() {
  yield 4
  yield 5
  yield 6
}

const genFromTwoParts = firstPartGen()

console.group('genFromTwoParts')
for(let genValue of genFromTwoParts) {
  console.log(genValue)
}
console.groupEnd()

function *loopedGen() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
  yield* loopedGen()
}

const loopedGenerator = loopedGen();

console.group('loopedGen')
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
  console.log(loopedGenerator.next().value)
console.groupEnd()

function* counterGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const counter = counterGenerator();

console.group('counterGenerator')
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
  console.log(counter.next().value)
console.groupEnd()

function* ioGenerator() {
  const name = yield 'Как вас зовут?' // Через yield можно передавать значения
  yield `Здравствуйте, ${name}`
}

const io = ioGenerator()

const nameG = prompt(
  io.next().value // Первый вызов next без аргументов
)
alert(
  io.next(nameG).value // Через next можно передавать значения
)

function* errorCatchGen() {
  try {
    const result = yield 'Какая-то строка';
  } catch (e) {
    console.log(e)
  }
}

const errCatch = errorCatchGen();
console.group('errorCatchGen')
  console.log(errCatch.next().value)
  errCatch.throw(new Error('Текст ошибки'))
console.groupEnd()


function* outerErrorCatchGen() {
  const result = yield 'Какая-то строка';
}

const outerErrCatch = outerErrorCatchGen();
console.group('outerErrCatch')
  console.log(outerErrCatch.next().value)
try {
  errCatch.throw(new Error('Текст ошибки'))
} catch (e) {
  console.log(e)
}
console.groupEnd()
