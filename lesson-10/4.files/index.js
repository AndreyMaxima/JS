const input = document.getElementById('fileInput')

// const blob = new Blob(['Hello ', 'file', '!'])
// // const ourFile = new File([blob], 'ourFile', {
// //     type: 'text/plain',
// //     lastModified: 0
// // })
// //
// // function autoDownload() {
// //     const a = document.createElement('a')
// //     a.download = 'ourFile.txt'
// //     a.href = URL.createObjectURL(ourFile)
// //     a.click()
// // }
// //
// // autoDownload()
//---------------------------------------------------------------
// input.onchange = () => {
//     const img = document.createElement('img');
//     img.src = URL.createObjectURL(input.files[0])
//     img.onclick = function() {
//         this.remove()
//     }
//     document.querySelector('.gallery').append(img)
// }
//-------------------------------------------------------------
// function addImgToGallery(base64img) {
//     const img = document.createElement('img');
//     img.src = base64img
//     document.querySelector('.gallery').append(img)
// }
//
// const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) : []
//
// imgArr.forEach(addImgToGallery)
//
// input.onchange = () => {
//     const reader = new FileReader()
//     reader.readAsDataURL(input.files[0])
//     reader.onload = () => {
//         imgArr.push(reader.result)
//         addImgToGallery(reader.result)
//         localStorage.setItem('imgArr', JSON.stringify(imgArr))
//     }
// }
//
// const form = document.getElementById('formId')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const formData = new FormData(form) // Создать объект FormData на основе формы
//     formData.append('name', 'Oleg') // Добавить значение в массив, доступный по переданному ключу
//     // formData.set('name', 'Andreas') // Установить значение
//     // formData.delete('name') //Удалить пару ключ-значение
//     console.log(formData.get('name')) // Получение первого значения по ключу
//     console.log(formData.has('name')) // Имеется ли запись
//     console.log(formData.getAll('name'))// Получение всех значений по ключу
//     console.log(formData.getAll('desc'))
// })


function addImgToGallery(url) {
    const img = document.createElement('img');
    img.src = url
    document.querySelector('.gallery').append(img)
}

const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) : []
imgArr.forEach(addImgToGallery)

const uploadButton = document.getElementById('uploadButton')
uploadButton.addEventListener('click', () => {
    // uploadFileToImgBB(input.files[0])
    uploadBase64UrlToImgBB(input.files[0])
})


//Отправка файла на сервер
function uploadFileToImgBB(file) {
    const formData = new FormData();
    formData.set('key', '749d05e951b4e41935ac53b7d070a9fd')
    formData.set('image', file)
    fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then((response) => {
            imgArr.push(response.data.display_url)
            localStorage.setItem('imgArr', JSON.stringify(imgArr))
            addImgToGallery(response.data.display_url)
        })
        .catch(console.error)
}

//Отправка файла как base64Url на сервер
function uploadBase64UrlToImgBB(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
        console.log(reader.result)
        const formData = new FormData();
        formData.set('key', '749d05e951b4e41935ac53b7d070a9fd')
        formData.set('image', reader.result.replace(/^.*,/, ''))
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then((response) => {
                imgArr.push(response.data.display_url)
                localStorage.setItem('imgArr', JSON.stringify(imgArr))
                addImgToGallery(response.data.display_url)
            })
            .catch(console.error)
    }
}

