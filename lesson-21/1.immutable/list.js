const {List} = Immutable;

function commonList() {
  const array = [1, 2, 3, 4, 5]
  const array2 = [-1, -2, -3, -4, -5]

  const list = List(array)

  console.log(list.size) // Размер immutable list

  console.log(List.isList(list)) // Проверка на List
  console.log(List.isList(array)) // Проверка на List

  const doubleList = List.of(...array, ...array2) // List из элементов

  console.log(doubleList.toArray())

  console.log(list.get(100)) // Получить значение элемента по индексу
  console.log(list.has(0)) // Есть ли элемент с указанным индексом
  console.log(list.has(-200)) // Есть ли элемент с указанным индексом

  console.log(list.includes(3)) // Есть ли значение среди элементов массива
  console.log(list.includes('undef')) // Есть ли значение среди элементов массива

  console.log(list.toArray()) // Приведение листа к массиву (без обработки вложенных)
  console.log(list.toJS()) // Приведение листа к массиву (с обработкой вложенных)

  const firstList = List([1, 2, 3, 4, 5])
  const secondList = List([1, 2, 3, 4, 5])
  const thirdList = List([1, 2, 3, 4])
  console.log(firstList === secondList) // Сравнение по содержимому
  console.log(firstList.equals(secondList)) // Сравнение по содержимому
  console.log(firstList.equals(thirdList)) // Сравнение по содержимому
  console.log(Immutable.is(firstList, secondList)) // Сравнение по содержимому
  console.log(Immutable.is(firstList, thirdList)) // Сравнение по содержимому
}

function changeList() {
  const list = List([1, 2, 3, 4, 5])
  const changedList = list.set( // Установка элемента
    0, //Индекс
    100 // Значение
  )
  console.log(changedList.toArray())
  const changedListOutOfBounds = list.set(100, 100)
  console.log(changedListOutOfBounds.toArray()) // Если введен индекс, больше размера массива, элементы с последнего по индекс будут заполнены как undefined

  const pushedList = list.push(10, 11, 12, 15) // Добавление в конец листа (возвращает новый List)
  console.log(pushedList.toArray())

  const poppedList = list.pop(); // Удаление из конца листа последнего элемента (возвращает новый List)
  console.log(poppedList.toArray())

  const unshiftedList = list.unshift(-3, -2, -1, 0); // Похоже на Array.prototype.unshift, но вовращает новый List
  console.log(unshiftedList.toArray())
  const shiftedList = list.shift() // Похоже на Array.prototype.shift, но вовращает новый List
  console.log(shiftedList.toArray())

  const plusSizeList = list.setSize(100) // Установка размера
  console.log(plusSizeList.toArray()) // Если установлен размер больше, то незаполненые элементы будут undefined
  const minusSizeList = list.setSize(2)
  console.log(minusSizeList.toArray()) // Если размер меньше, невлезающие элементы будут удаены
  const listAfterInsert = list.insert( // Вставить элемент на позицию
    2, //Индекс нового элемента
    200 //Значение нового элемента
    )
    .insert(-100, -100) //Если значение отрицательное, работает как unshift
    .insert(100, 100) //Если значение больше чем size, работает как push
  console.log(listAfterInsert.toArray())

  const listSize = list.update((currentList) => currentList.size)
  console.log(listSize)
  const firstUpdatedList = list.update(3, (elem) => elem + 100)
  console.log(firstUpdatedList.toArray())
  const secondUpdatedList = list.update(100, 100, (elem) => elem * -1)
  console.log(secondUpdatedList.toArray())

  const listAfterDelete = list.deleteIn(1) // Удаление из листа
  console.log(list.toArray())
}

function multiList() {
  const multiList = List.of(
    List.of(1, 2, 3, 4, 5),
    List.of(-1, -2, -3, -4, -5)
  )

  console.log(multiList.getIn( //Получение элемента по индексам (во вложенных листах)
    [0, // Индекс в основном листе
      1 // Индекс во вложенном
    ]
    )
  )

  const settedMultiList = multiList.setIn([1, 10], -10) //Установка значение во вложенном листе
  console.log(settedMultiList.toJS())
  const multiListAfterDelete = multiList.deleteIn([1, 3]) // Удаление из вложенного листа
  console.log(multiListAfterDelete.toJS())
  // Вставка элемента во вложенный массив
  const firstMultiListAfterUpdate = multiList.updateIn([0, 3], (elem) => elem + 100)
  console.log(firstMultiListAfterUpdate.toJS())
  // Если элемпент не существует в очередном листе, то он будет создан, элементы от list.size до элемена будут заполнены undefined
  const secondMultiListAfterUpdate = multiList.updateIn([5, 3], 'defaultValue', (elem) => elem + 100)
  console.log(secondMultiListAfterUpdate.toJS())
  const thirdMultiListAfterUpdate = multiList.updateIn([1, 100], 'defaultValue', (elem) => elem + 100)
  console.log(thirdMultiListAfterUpdate.toJS())

  console.log(multiList.hasIn([1, 3])) // Есть ли элемент в подсписке
  console.log(multiList.hasIn([100, 3])) // Есть ли элемент в подсписке
  console.log(multiList.hasIn([1, 100])) // Есть ли элемент в подсписке
}

function mergeList() {
  const firstList = List.of(1, -2, 3, -4, 5)
  const secondList = List.of(-1, 2, -3, 4, -5)
  const mergedList = firstList.merge(secondList)
  console.log(mergedList.toArray())
}

function likeArrayMethods() {
  const list = List.of(-5, -4, -3, -2, -1, 0, 1, 2, 3, 0, 4, 5);
  const mappedList = list.map((elem) => elem * -1) // Как Array.prototype.map
  console.log(mappedList.toArray())

  const filtredList = list.filter((value, index, iterator) => value >= 0)
  console.log(filtredList.toArray())
  const filtredNotList = list.filterNot((value, index, iterator) => value >= 0)
  console.log(filtredNotList.toArray())

  const reversedList = list.reverse()
  console.log(reversedList.toArray())

  const sortedList = list.sort();
  console.log(sortedList.toArray())

  console.log(list.reduce((acc, val, key, iteator) => acc + val + key, 0))

  console.log(list.indexOf(0))
  console.log(list.lastIndexOf(0))
  console.log(list.findIndex((value, index, iterator) => value === 0))
  console.log(list.findLastIndex((value, index, iterator) => value === 0))
  console.log(list.min())
  console.log(list.max())
  console.log(list.isEmpty()) // Пустой ли список
  console.log(List()
    .isEmpty()) // Пустой ли список
}
