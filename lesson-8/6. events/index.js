const handleButton = () => {
    alert('click')
}
const secondHandleButton = () => {
    alert('second click')
}

const button = document.getElementById('buttonId');

// button.addEventListener('click', () => {
//     console.log('clicked')
// }) // Добавление обработчика события click

/* Частоиспользуемые события
* click - при клике
* contextmenu - при клике правой кнопкой
* mousover/mouseout - при наведении мыши на элемент / свидении с нето
* mousedown/mouseup при нажатии мыши / отпускании
* mousemove - при движении мыши
*
* submit - при отправке формы
* focus - при фокусировку на элементе (если она возможна)
* change - при изменении значения (например input'a) при потере фокуса
* input - при вводе нового символа (например в input)
*
* DOMContentLoaded - при окончании построения DOM
* */

// button.addEventListener('click', handleButton) // При добавлении обработчика можно задать ссылку на функцию-обработчик
// button.addEventListener('click', secondHandleButton)
// button.removeEventListener('click', handleButton) // Если обработчик задан по ссылке его можно удалить

// button.addEventListener('click', (event) => { // В функцию обработчик передаётся объект событие
//     event.target.style.backgroundColor = 'darkcyan' // В свойстве target объекта события хранится DOM-объект, вызвавший событие
//     console.log(event.type) // Тип события
//     console.log(event.clientX) // Кординаты мыши во время события
//     console.log(event.clientY)
// })
//
// const objectHandler = {
//     handleEvent: (e) => alert(`objectHandler отработал. Позиция мыши: ${e.clientX}:${e.clientY}`)
// }
//
// button.addEventListener('click', objectHandler) //Если передан объект, то будет вызван его метод handleEvent


// Валидируемый input
const input = document.getElementById('textInputId');

const validateName = (name) => /^[А-я]*$/.test(name);

let inputValue = "";
const handleInput = (e) => {
    if(validateName(e.target.value)) {
        inputValue = e.target.value;
    }
}
input.addEventListener('input', handleInput)
input.addEventListener('input', () => input.value = inputValue)

//----------------------Всплытие событий-------------------------------

document.getElementById('checkboxId').addEventListener('click', (e) => {
    button.disabled = !e.target.checked;
    alert('checkbox click')
});
document.getElementById('labelId').addEventListener('click', (e) => {
    alert('label click')
});
document.getElementById('my-form').addEventListener('click', (e) => {
    alert('form click')
    console.log(e.target) // Узел который сгенерировал событие
    console.log(e.currentTarget) // Узел который обработал событие
    e.stopPropagation(); // Event будет всплывать пока не будет остановлен этим методом
});
document.getElementById('divId').addEventListener('click', (e) => {
    alert('div click')
});

//----------------------Делегирование событий-------------------------------

document.getElementsByTagName('ul')[0].addEventListener('click', (e) => {
    e.target.classList.toggle('colored')
})