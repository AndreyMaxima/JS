const input = document.getElementById('fileInput')

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
//
// function moveLeftAnimation() {
//     const loaderBox = document.getElementById('loader-box')
//     let pos = Number.parseInt(getComputedStyle(loaderBox).left)
//     let interval = moveRight()
//
//     function moveRight() {
//         return setInterval(() => {
//             if (pos < Number.parseInt(getComputedStyle(loaderBox.parentElement).width) - Number.parseInt(getComputedStyle(loaderBox).width)) {
//                 pos++;
//                 loaderBox.style.left = `${pos}px`
//             } else {
//                 interval = moveLeft()
//             }
//         }, 20)
//     }
//
//     function moveLeft() {
//         return setInterval(() => {
//             if (pos >= 0) {
//                 pos--;
//                 loaderBox.style.left = `${pos}px`
//             } else {
//                 interval = moveRight()
//             }
//         }, 20)
//     }
// }
//
// function moveTopAnimation() {
//     const loaderBox = document.getElementById('loader-box')
//     let pos = Number.parseInt(getComputedStyle(loaderBox).top)
//     let interval = moveBottom()
//
//     function moveBottom() {
//         return setInterval(() => {
//             if (pos < Number.parseInt(getComputedStyle(loaderBox.parentElement).height) - Number.parseInt(getComputedStyle(loaderBox).height)) {
//                 pos++;
//                 loaderBox.style.top = `${pos}px`
//             } else {
//                 interval = moveTop()
//             }
//         }, 20)
//     }
//
//     function moveTop() {
//         return setInterval(() => {
//             if (pos >= 0) {
//                 pos--;
//                 loaderBox.style.top = `${pos}px`
//             } else {
//                 interval = moveBottom()
//             }
//         }, 20)
//     }
// }
// moveTopAnimation()
// moveLeftAnimation()

function moveLeftAnimation() {
    const loaderBox = document.getElementById('loader-box')
    let pos = Number.parseInt(getComputedStyle(loaderBox).left)
    let interval = moveRight()

    function moveRight() {
        return requestAnimationFrame(() => {
            if (pos < Number.parseInt(getComputedStyle(loaderBox.parentElement).width) - Number.parseInt(getComputedStyle(loaderBox).width)) {
                pos++;
                loaderBox.style.left = `${pos}px`
                requestAnimationFrame(moveRight)

            } else {
                requestAnimationFrame(moveLeft)
            }
        }, 20)
    }

    function moveLeft() {
        return requestAnimationFrame(() => {
            if (pos >= 0) {
                pos--;
                loaderBox.style.left = `${pos}px`
                requestAnimationFrame(moveLeft)
            } else {
                requestAnimationFrame(moveRight)
            }
        })
    }
}

function moveTopAnimation() {
    const loaderBox = document.getElementById('loader-box')
    let pos = Number.parseInt(getComputedStyle(loaderBox).top)
    let interval = moveBottom()
    document.getElementById('stop').addEventListener('click', () => cancelAnimationFrame(interval))
    function moveBottom() {
        return requestAnimationFrame(() => {
            if (pos < Number.parseInt(getComputedStyle(loaderBox.parentElement).height) - Number.parseInt(getComputedStyle(loaderBox).height)) {
                pos++;
                loaderBox.style.top = `${pos}px`
                interval = requestAnimationFrame(moveBottom)
            } else {
                interval = requestAnimationFrame(moveTop)
            }
        })
    }

    function moveTop() {
        return requestAnimationFrame(() => {
            if (pos >= 0) {
                pos--;
                loaderBox.style.top = `${pos}px`
                interval = requestAnimationFrame(moveTop)
            } else {
                interval = requestAnimationFrame(moveBottom)
            }
        })
    }
}
moveTopAnimation()
moveLeftAnimation()