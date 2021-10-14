// console.log(1)
// console.log(2)
// setTimeout(() => console.log(3), 0) // console.log(3) Будет выполнен в последнюю очередь, несмотря на задержку в 0
// console.log(4)
// console.log(5)

const progress = document.getElementById('progress');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => alert('click'))


//--------------------------Разделение трудоёмкой задачи на части с использванием асинхронных операций



// for (let i = 0; i <= 1e6; i++) {
//     progress.innerHTML = i;
// }

const part = (i= 0) => {
    do {
        i++;
    } while(i % 1e2 !==0)
    if(i!==1e10) {
        setTimeout(part, 0, i)
        progress.innerHTML = i;
    } else {
        console.log('отработано')
    }
}

part()
