const querySelected = document.querySelector('.tdClass') // Возвращает первый найденный узел по селектору
const queryAllSelected = document.querySelectorAll('.tdClass') // Возвращает все узелы по селектору
const gotById = document.getElementById('fistCell') // Возвращает элемент по id
console.log(fistCell) // можно использовать просто ID, если у нас нет сущности с таким именем (не рекомендовано)
const gotByTag = document.getElementsByTagName('tr') // Возвращает элементы по тэгу
const getByClassName = document.getElementsByClassName('tdClass') // Возвращает элементы по классу
const getByName = document.getElementsByName('captionName') // Возвращает элементы по name

const table = document.getElementById('tableId')

// То что ниже, можно использовать на элементе а не document, поиск будет производиться внутри узла
const queryOnElement = table.querySelector('.tdClass')
const queryAllOnElement = table.querySelectorAll('.tdClass')
const byClassOnElement = table.getElementsByClassName('tdClass')
const byTagOnElement = table.getElementsByTagName('td')
const childrenByTagOnElement = table.getElementsByTagName('*') // Все потомки таблицы

