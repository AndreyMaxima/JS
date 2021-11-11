const {Map} = Immutable

function firstPartMap() {
  const map = Map({ // Создание иммутабельной Map
    name: 'Andreas',
    age: 22
  })
  console.log(map)

  console.log(map.get('name')) // Обращение к "полю"

  const newMap = map.set('birthday', '25.02.1999'); // Назначаем новое поле (возвращает новый объект, старый не модифицируется)
  console.log(map.get('birthday')) // undefined
  console.log(newMap.get('birthday')) // 25.02.1999

//-----------Добавление нескольких полей (или изменеие старых)-----------//
  const updatedMap = map
    .set('birthday', '25.02.1899')
    .set('age', 122)
    .set('obj', {
      key: 'value'
    });
  console.log(updatedMap.get('birthday'))
  console.log(updatedMap.get('age'))
  const updatedMap2 = updatedMap.update('age', (age) => age + 200) // Так же есть updateIn
  console.log(updatedMap2.get('age'))
  console.log(updatedMap.has('age')) // Есть ли поле в Map
  console.log(updatedMap.has('unknown')) // Есть ли поле в Map
  console.log(updatedMap.includes(122)) // Существует ли значение (поверхностная проверка)
  console.log(updatedMap.includes(123)) // Существует ли значение (поверхностная проверка)
  console.log(updatedMap.includes('value')) // Существует ли значение (поверхностная проверка)
  console.log(updatedMap.first()) // Вывести первое поле
  console.log(updatedMap.last()) // Вывести последние поле

}

function secondPartMap() {
  const map = Map({ // Создание иммутабельной Map
    name: 'Andreas',
    // location: { // Объект внутри не иммутабелен
    //   city: 'Moscow',
    //   street: 'AnyStreet'
    // }
    location: Map({
      city: 'Moscow',
      street: 'AnyStreet'
    })
  })
  console.log(map.get('location')
    .get('city'))
  console.log(map.getIn([ // Получение элемента цепочки, переданной в массив
    'location',
    'city']))
  const updatedMap = map.setIn(['location', 'city'], 'Dubai') // Установка элемента цепочки, переданной в массив
  console.log(updatedMap.getIn(['location', 'city']))
  console.log(updatedMap.getIn(
    ['location', 'undefinedKey'],
    'defaultValue') // Будет возвращено, если значение не установлено
  )

  console.log(Map.isMap(map)) // Провера на Map
  console.log(map.size) // Размер Map

  const mapWithDeletedValue = updatedMap.delete('location'); // Удаление, так же есть deleteIn
  console.log(mapWithDeletedValue.get('location'))
  const mapWithDeletedAll = updatedMap.get('location')
    .deleteAll(['city', 'street'])
  const clearedMap = updatedMap.clear();
  console.log(clearedMap.size)

  console.log(
    updatedMap.toObject() // Приведение карты к объекту
  )
  const deletedAllMap = updatedMap.deleteAll( // Удаление нескольких свойств
    ['name', 'location'] // Массив удаляемых свойст
  );
  console.log(deletedAllMap.toObject())

}

function mapMerging() {
  const firstMap = Map({
    firstKey: 'any',
    firstObjKey: {
      firstChildKey: 'firstChildValue',
      secondChildKey: 'secondChildValue',
    }
  })
  const secondMap = Map({
    secondKey: 'any',
    secondMutableKey: {
      firstChildKey: 'firstChildValue',
      secondChildKey: 'secondChildValue',
    }
  })
  const thirdMap = Map({
    thirdKey: 'any',
    thirdObjKey: {
      firstChildKey: 'firstChildValue',
      secondChildKey: 'secondChildValue',
    }
  })

  const mergedMap = firstMap.merge(secondMap, thirdMap); // Объединение несольких карт
  console.log(mergedMap.toObject())

  const obj = {
    firstMutableKey: 'any',
    secondMutableKey: {
      first: 'first',
      second: 'second'
    },
  }

  const mergedWithObjectMap = firstMap.merge(obj, secondMap); // Можно объединять с объетами, но на выходе Map
  console.log(mergedWithObjectMap.toObject())
}

function mapMethods() {
  const map = Map({
    firstKey: 'any',
    firstObjKey: {
      firstChildKey: 'firstChildValue',
      secondChildKey: 'secondChildValue',
    }
  })

  console.log(Array.from(map.keys()))
  console.log(Array.from(map.values()))
  console.log(Array.from(map.entries()))

  const mappedMap = map.map((value, key, iterator) => { // Перебор карты (вернёт новую Map)
    // console.log(value)
    // console.log(key)
    // console.log(iterator)
    return 'newValue'
  })

  console.log(mappedMap.toObject())

  const keyMappedMap = map.mapKeys((key, value, iterator) => {
    return key.toUpperCase();
  })
  console.log(keyMappedMap.toObject())

  const entriesMappedMap = map.mapEntries((entry, index, iterator) => {
    return [entry[0].toUpperCase(), 'value']
  })
  console.log(entriesMappedMap.toObject())

  const numberMap = Map({
    a: 5,
    b: 10,
    c: -3,
    d: -10,
    e: 0
  })

  const firstFiltredMap = numberMap.filter(
    (value, key, iter) => value > 0
  )
  console.log(firstFiltredMap.toObject())
  const secondFiltredMap = numberMap.filterNot(
    (value, key, iter) => value > 0
  )
  console.log(secondFiltredMap.toObject())
  const flippedMap = numberMap.flip() // Поменять ключи и значения местами
  console.log(flippedMap.toObject())
  const reversedMap = numberMap.reverse()
  console.log(numberMap.toObject())
  console.log(reversedMap.toObject())
  const ascSortedMap = numberMap.sort() // Упороядычевает по значениям (от меньшего к большему)
  console.log(ascSortedMap.toObject())
  const descSortedMap = numberMap.sort(
    (a, b) => a > b // Функция сортировки
  )
  console.log(descSortedMap.toObject())
  const reduceResult = numberMap.reduce(
    (acc, value, key, iter) => {
      return acc + value
    }, 0)
  console.log(reduceResult)
  // Возвращает true, если условие в предикате выполняется для каждого элемента
  console.log(numberMap.every((value, key, iterator) => value !== -100))
  console.log(numberMap.every((value, key, iterator) => value === -100))

  // Возвращает true, если условие в предикате выполняется для какого-либо элемента
  console.log(numberMap.some((value, key, iterator) => value === -100))
  console.log(numberMap.some((value, key, iterator) => value !== -10))
}

function convertingMap() {
  const map = Map({ // Создание иммутабельной Map
    name: 'Andreas',
    location: Map({
      city: 'Moscow',
      street: 'AnyStreet'
    })
  })
  console.log(map.toObject()) // Приводит к объекту (вложенные объекты остаются неизменны)
  console.log(map.toArray()) // Приводит к массиву (вложенные объекты остаются неизменны)
  console.log(map.toJS()) // Приводит к объекту (вложенные иммутабельные объекты тоже)
  const fromJS = Immutable.fromJS({ // Конвертирование в иммутабельный объект
    firstKey: 'firstValue',
    objKey: {
      any: 'any'
    },
    arr: [1, 2, 3, 4, 5]
  })
  console.log(fromJS.get('objKey'))
  console.log(fromJS.get('firstKey'))
}
