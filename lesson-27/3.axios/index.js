function intruduction() {
  axios( // GET-запрос
    'https://fish-text.ru/get' // URL
  )
    .then(console.log) // Возращает Promise
  axios.request('https://fish-text.ru/get', // Любой запрос
    {
      method: 'POST'
    })
  axios.get('https://fish-text.ru/get') // GET запрос
    .then(console.log)
  axios({ // Запрос с параметрами
    method: 'POST', // Метод
    url: 'https://fish-text.ru/get' // URL запроса
  })
  axios.post('https://fish-text.ru/get') // Выполнение POST запроса
  axios.delete('https://fish-text.ru/get') // Выполнение DELETE запроса
  axios.head('https://fish-text.ru/get') // Выполнение HEAD запроса
  axios.options('https://fish-text.ru/get') // Выполнение OPTIONS запроса
  axios.put('https://fish-text.ru/get') // Выполнение PUT запроса
  axios.patch('https://fish-text.ru/get') // Выполнение PATCH запроса
}

function dumMyApi() {
  const commonDumMyApi = axios.create({ // Создание экземпляра с "предопределёнными" настройками (вызов не производится)
    baseURL: 'https://dummyapi.io/data/v1/', // Базовый URL
    headers: { // Загаловки
      'app-id': '617b11efbdaa719034cf6d83'
    },
    timeout: 2000 // Тайм-аут для запроса (в м.с.)
  })

  commonDumMyApi.get // GET запрос
    ('comment', // url (будет добавлен к baseURL из конфигов выше)
      {  // Параметры (будут объеденены с параметрами экземпляра)
        params: { // Параметры URL
          page: 0,
          limit: 30
        }
      }).then(console.log)

  commonDumMyApi.post // POST запрос
    ('comment/create', // url (будет добавлен к baseURL из конфигов выше)
      {  // Параметры (будут объеденены с параметрами экземпляра)
        // Ниже параметры, передаваемые в body
        // Только для PUT, POST, DELETE, и PATCH запросов
        // Значение может быть строка, plane object, ArrayBuffer, ArrayBuferView, URLSearchParams
        // Для браузера так же поддерживаются типы: FormData, File, Blob
        post: '60d21b7967d0d8992e610d1b',
        owner: '60d0fe4f5311236168a109d0',
        message: 'Hello, this text from axios',
      }).then(console.log)


  console.log(
    commonDumMyApi.defaults // Созранённые настройки
  )
  commonDumMyApi.defaults.timeout = 5000 // Настройки можно менять после создания

  axios.defaults.baseURL = 'https://fish-text.ru/get'; // У глобального объекта так же можно менять настроки
  axios.get().then(console.log)

  const dumMyApiUsers = axios.create({ // Создание экземпляра на основе существующего
    ...commonDumMyApi.defaults,
    baseURL: `${commonDumMyApi.defaults.baseURL}user`
  })

  dumMyApiUsers.get('', {
    params: {
      page: 0,
      limit: 30
    }
  }).then(console.log)

  dumMyApiUsers.post('/create', { // Создание пользователя
    firstName: 'Andreas',
    lastName: 'Valent',
    email: 'AndreySFNMaxima@yandex.ru',
  }).then(console.log)
}

const beforeRequestSuccess = (config) => { // Эта функция будет назначена ниже и отработана до отправки запроса
  console.log(`axios ${config.baseURL}`)
  return config
}
const requestError = (error) => { // Эта функция будет назначена ниже и отработана в случае неудачного запроса
  console.log(error)
  return Promise.reject(error)
}

const beforeResponseSuccess = (response) => { // Эта функция будет назначена ниже и отработана в случае удачного ответа перед вызовом then (если таковой имеется)
  console.log(response)
  return response
}
const responseError = (error) => { // Эта функция будет назначена ниже и отработана в случае неудачного ответа (статус ответа отличается от 2хх)
  console.log(error)
  return Promise.reject(error)
}
axios.interceptors.request.use(beforeRequestSuccess, requestError)
axios.interceptors.response.use(beforeResponseSuccess, responseError)
axios.defaults.baseURL = 'https://fish-text.ru/get';
axios.get('', {
  // auth: {
  //   username: 'AnyUser',
  //   password: 'pass'
  // }
  // onUploadProgress: (progressEvent) => {}
  // onDownloadProgress: (progressEvent) => {}
  validateStatus: (status) => {
    return status >= 200 && status < 300 // default
  }
})




