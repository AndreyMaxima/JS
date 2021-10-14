// const timeoutCallback = (a, b) => console.log(`Таймаут! аргументы коллбека: ${a}, ${b}`)
// const intervalCallback = (a, b) => console.log(`Очередная итеррация интервала! аргументы коллбека: ${a}, ${b}`)
//
// const timer = setTimeout(timeoutCallback, // выполнения функции с задержкой. Возвращает идентификатор
//     3000, // Задержка в миллисекундах
//     'аргумент1', // Параметры, передаваймые в коллбек
//     'аргумент2'
// );
//
// //------------------Рекурсивный таймаут
//
// let recursiveTimout = setTimeout(function tick() {
//     console.log('tik-tac')
//     recursiveTimout = setTimeout(tick, 500)
// }, 500);
// //---------------------------------------------------------------
//
// const interval = setInterval( // выполнения функции раз в определённое время. Возвращает идентификатор
//     intervalCallback,
//     500, // Интервал выполнения
//     'интервал аргумент1', // Параметры, передаваймые в коллбек
//     'интервал аргумент2'
// )
//
// setTimeout(()=>
//     clearTimeout(recursiveTimout), // Откючение таймера (очистка таймаута)
//     3000)
//
// setTimeout(()=>
//     clearInterval(interval), // Откючение таймера (очистка таймаута)
//     4000)

const btn = document.getElementById('btnId');

btn.addEventListener('click',
    (() => {
        let interval;
        let isActive = false;
        return () => {
            if(isActive) {
                clearInterval(interval)
                btn.classList.remove('active')
            } else {
                interval = setInterval(() => {
                    btn.classList.toggle('active');
                }, 2000)
            }
            isActive = !isActive;
        }
    })()
)
