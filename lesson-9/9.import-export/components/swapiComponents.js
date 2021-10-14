// Функции, возвращающие блоки (DOM=-элементы)
export function createApiPoints(obj) {
    const result = document.createElement('div')
    Object.keys(obj).forEach(key => {
        const div = document.createElement('div')
        div.innerHTML = `<span>${key}</span>:<a href="${obj[key]}">${obj[key]}</a>`
        result.append(div)
    })
    return result;
}

const createFilm = (title, href) => {
    const li = document.createElement('li');
    li.append(document.createTextNode(`${title} -`))
    const a = document.createElement('a')
    a.text = href
    a.href = href;
    li.append(a)
    return li;
}

export const createFilmList = (filmsArray) => {
    const ul = document.createElement('ul')
    filmsArray.forEach(film => ul.append(createFilm(film.title, film.url)))
    return ul
}