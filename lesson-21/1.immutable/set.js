const {Set} = Immutable;
function set() {
  const set = Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]) // создвние сета
  console.log(set.toJS())
  const secondSet = Set.of(1, 2, 3, 4, 6, 5, 5, 5, 5, 5)
  console.log(secondSet.toJS())

  console.log(Immutable.isSet(set)) // Является ли сетом
  console.log(Immutable.isSet({})) // Является ли сетом

  const addedSet = set.add(22)
    .add(22)
    .add(22)
    .add(90);
  console.log(addedSet.toJS())

  const unionSet = set.union([1, 2, 3, 4, 55, 7, 8, 9]) // Объединение сета с коллекцией, также можно использовать merge и concat
  console.log(unionSet.toJS())

  console.log(set.has(2)) // Проверка на налиие элемента в сете
  console.log(set.has(200)) // Проверка на налиие элемента в сете

  const setAfterDelete = set.delete(1)
  console.log(setAfterDelete.toJS())

  console.log(set.size)

  const clearedSet = set.clear();
  console.log(clearedSet.toJS());
}
