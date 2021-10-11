const div = document.createElement('div') //Создаёт узел-элемент
div.innerHTML = '<span>Какой-то спан в div</span>' // Редактировние содержимого DOM-элемента += перезапишет значения
const textNode = document.createTextNode('Какой-то о чень интересный текст') //Создаёт текстовый узел
// После создания элемент надо добавить в документ
// document.body.append(div) // Добавить элемент в потомки в конец
// document.body.prepend(div) // Добавить элемент в потомки в начало
// document.body.before(div) // Добавить элемент перед элементом
// document.body.after(div) // Добавить элемент после элементом
// document.body.replaceWith(div) // Заменить элемент элементом

document.getElementsByTagName('table')[0].before(div, textNode) // Работает сразу с несколькими элементами

textNode.remove() // Удалить элемент

const clone = div.cloneNode(true); // Клонировать элемент (true - с дочерними узлами, false - без)

document.getElementsByTagName('table')[0].after(clone)

const table = document.getElementsByTagName('table')[0]

table.className = 'newClass' // Назначение класса

table.classList.add('tableClass') // Добавить класс
table.classList.remove('tableClass') // Удалить класс
table.classList.toggle('tableClass') // Если класса нет - добавить
table.classList.toggle('tableClass') // Если есть - удалить
console.log(table.classList.contains('tableClass')) // Присутствует ли класс


console.log(table.className)