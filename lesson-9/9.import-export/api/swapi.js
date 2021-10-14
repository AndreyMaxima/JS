// Для работы со SWAPI
import { createFetch } from '../utils/fetchUtils.mjs'
import * as urls from '../constants/swapi.js'

export const swapi = { // Экспорт в другой модуль
    getMain: createFetch(urls.MAIN_URL),
    getFilms: createFetch(urls.FILM_URL)
}