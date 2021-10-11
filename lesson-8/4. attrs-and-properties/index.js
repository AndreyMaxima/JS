const form = document.getElementsByTagName('form')[0];
const a = document.getElementsByTagName('a')[0];
const checkbox1 = document.getElementById('checkboxId');
const checkbox2 = document.getElementById('checkboxId2');
const textInput = document.getElementById('textInputId');
const button = document.getElementById('buttonId');

console.log(checkbox1.getAttribute('type')) // Получить значение атрибута
console.log(checkbox1.hasAttribute('type')) // Имеется ли аттрибут
console.log(checkbox1.hasAttribute('name'))
form.removeAttribute('name')  // Удалить аттрибут
checkbox1.setAttribute('type', 'text') // Устанавливает аттрибут или меняет его значение
checkbox2.setAttribute('data-about', 'about-data')
checkbox2.setAttribute('about', 'just-about')
console.log(checkbox1.attributes) // Псевдомассив с атрибутами узла
console.dir(checkbox1) // Вывод DOM-бъекта
checkbox2.disabled = true;
console.log(form.getAttribute('style')) // Атрибут в виде строки
form.style.backgroundColor = 'darkcyan' // Изменение аттрибута стиля

// Не все изменения свойств DOM-объекта влияют на аттрибут
textInput.value = 'Другой текст'
console.log(textInput.getAttribute('value'))

//Иногда DOM-свойства могут отличаться от аттрибутов
console.log(a.getAttribute('href'))
console.log(a.href)

console.log(checkbox2.dataset.about) // Аттрибуты начинающиеся с data- попадают в свойство dataset