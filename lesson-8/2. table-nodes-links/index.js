const table = document.getElementsByTagName('table')[0];

const trs = table.rows; // Псевдомассив узлов tr независимо от части таблицы (все)

const caption = table.caption // узел caption

const tHead = table.tHead // узел thead
const tFoot = table.tFoot // узел tfoot
const tBodies = table.tBodies // псевдомассив узелов tbody
const tbody = table.tBodies[0] // псевдомассив узелов tbody

const bodyRows = tbody.rows // у tbody tFoot tHead также есть строки



const bodyFirstRows = tbody.rows[0] // первая строка тела таблицы
const cells = bodyFirstRows.cells // псевдомассив td th tr, находящихся внутри строки
const firstCell = bodyFirstRows.cells[0] // обращение по индексу к коллекции

console.log(bodyFirstRows.sectionRowIndex) // Возвращает индекс строки в пределах секции
console.log(bodyFirstRows.rowIndex) // Возвращает индекс строки в пределах таблицы
console.log(firstCell.cellIndex) // Возвращает индекс ячейки в пределах строки td th
