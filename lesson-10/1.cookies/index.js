console.log(document.cookie); // Плучение доступа к cookies
// формат cookies - key=value; secondKey=secondValue
document.cookie = 'name=Andreas' // Устанавливабтся только те, что перечислены в присвоении
document.cookie = 'role=teacher' // По умолчанию куки живут до закрытия браузера
console.log(document.cookie); // Плучение доступа к cookies
document.cookie = 'forOther=forOtherValue; path=/' // Устонавливаем путь с которого можно осуществить доступ

document.cookie = 'maxAgeCookie=anyValue; max-age=5' // Установить время жизни в секундах

const date = new Date(Date.now() + 86400000)
document.cookie = `dateCookie=val; expires=${date.toUTCString()}` // Установка даты смерти куки

const yesterday = new Date(Date.now() - 86400000)
document.cookie = `role=teacher; expires=${yesterday.toUTCString()}` // Для удаления куки устанавливаем им дату в прошедшую
document.cookie = 'securedCookie=secure; secure'; // Будут переданы только по тому протоколу, при котором установлены
// httpOnly - устанавливается сервером. И защищает куки от доступа через JS
document.cookie = 'xsrfCookie=xsrf; samesite' // samesite=strict
document.cookie = 'xsrfCookie=xsrf; samesite=lax'