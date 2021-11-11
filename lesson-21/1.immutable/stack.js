const { Stack } = Immutable
const stack = Stack(['first', 'second', 'third']) // Создание иммутабельного стека
console.log(stack.toJS()) // Преобразует иммутабельный стек в масиив
console.log(stack.size) // Возвращает размер стека

const stackAfterPush = stack.push('fourth');
console.log(stackAfterPush.toJS())
const stackAfterUnshift = stack.unshift('fourth'); // push и unshift работают одинаково (добавляют элемент в начало)
console.log(stackAfterUnshift.toJS())
console.log(stackAfterPush.equals(stackAfterUnshift)) // сравнение стеков по содержимому

const stackAfterPop = stack.pop()
console.log(stackAfterPop.toJS())
const stackAfterShift = stack.shift() // Работает так же как и pop
console.log(stackAfterPop.toJS())

console.log(stack.has(1)) // Проверка по ключу (индексу)

console.log(stack.toObject())

function printFromNumToNum(start, end, step=1) {
  // for(let i=start; i<=end; i+=step) {
  //   console.log(i)
  // }
  Immutable.Range( // Генерация листа с последовательсностью чисел
    start, //Начальное число
    end, //Конечное число
    step //Шаг
  ).forEach((i) => console.log(i))
}

printFromNumToNum(0, 10, 2)
