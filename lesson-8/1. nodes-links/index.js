const htmlNode = document.documentElement;
const headNode = document.head;
const bodyNode = document.body;

const firstChild = bodyNode.firstChild // firstChild указывает на первый дочерний узел
const firstElementChild = bodyNode.firstElementChild // firstElementChild указывает на первый дочерний узел-элемент
const lastChild  = bodyNode.lastChild // lastChild указывает на последний дочерний узел
const lastElementChild = bodyNode.lastElementChild // lastElementChild указывает на последний дочерний узел-элемент

const childNodes = bodyNode.childNodes // псевдомассив дочерних узлов
const children = bodyNode.children // псевдомассив дочерних узлов-элементов

const div = bodyNode.children[3] // Обращаться к псевдомассиву можно по индексам

const ul = bodyNode.children[3].children[0] // При помощи данных свойств можно выстраивать цепочки

const secondLi = ul.children[1]

const firstLi = secondLi.previousElementSibling // Получение предыдущего узла-элемента соседа
const thirdLi = secondLi.nextElementSibling // Получение следующего узла-элемента соседа

const secondLiPreviousNode = ul.children[1].previousElementSibling // Получение предыдущего узла соседа
const secondLiNextNode = secondLi.nextElementSibling // Получение следующего узла соседа

const secondLiParentElement = secondLi.parentElement //Получить родительский узел-элемент
const secondLiParentNode = secondLi.parentNode //Получить родительский узел (работает по разнаму только с documentElement)

