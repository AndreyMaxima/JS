/* eslint-disable */
//отключение проверки через линтер для всего файла
function uploadFileToImgBB(file) {
  const formData = new FormData();
  formData.set('key', '749d05e951b4e41935ac53b7d070a9fd');
  formData.set('image', file);
  fetch('https://api.imgbb.com/1/upload', {
                  method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((response) => {
                                                  imgArr.push(response.data.display_url);
      localStorage.setItem('imgArr', JSON.stringify(imgArr));
                                        addImgToGallery(response.data.display_url);
    })
    .catch(console.error);
}

function uploadBase64UrlToImgBB(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader.result);
    const formData = new FormData();
    formData.set('key', '749d05e951b4e41935ac53b7d070a9fd');
    formData.set('image', reader.result.replace(/^.*,/, ''));
    fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((response) => {
        imgArr.push(response.data.display_url);
        localStorage.setItem('imgArr', JSON.stringify(imgArr));
        addImgToGallery(response.data.display_url);
      })
      .catch(console.error);
  };
}
