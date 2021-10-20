// eslint-disable-next-line no-unused-vars
function uploadFileToImgBB(file) {
  const formData = new FormData();
  formData.set('key', '749d05e951b4e41935ac53b7d070a9fd');
  formData.set('image', file);
}

// Исключение строки из проверки
// eslint-disable-next-line no-unused-vars
function uploadBase64UrlToImgBB(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader.result);
    const formData = new FormData();
    formData.set('key', '749d05e951b4e41935ac53b7d070a9fd');
    formData.set('image', reader.result.replace(/^.*,/, ''));
  };
}
