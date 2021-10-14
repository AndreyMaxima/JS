import {swapi} from './api/swapi.js' // Импорт из другого модуля
import {swapi as justApi} from './api/swapi.js' // Импорт из другого модуля под другим имененм
import {createApiPoints} from './components/swapiComponents.js'
import {createFilmList} from "./components/swapiComponents.js";

swapi.getMain((obj) => document.body.append(createApiPoints(obj)), console.error)
justApi.getFilms(console.log)
justApi.getFilms(resp => document.getElementById('films').append(createFilmList(resp.results)))
