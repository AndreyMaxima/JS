const UserRepository = require('../repositories/usersRepository')
const UserActions = require('../actions/usersActions')
class UserService {
  // Здесь происходит запросы и обработки данных, валидация запроса и и.д.
  getUserList(req, res) {
    // Обработка значений запроса и вызов слоя(ёв) хранения (репозитория(ев))
    UserRepository.getUserListThirdParty()
      .then(apiResponse => {
        // Какие-то пребразования над результатом из репозитория
        res.status(200)
          .json(apiResponse)
      })
      .catch(error => res.status(520).send(error))
  }

  createUser(req, res) {
    // Валидация запроса
    UserActions.fakeCreateUser(req.body.name, req.body.lastName)
      .then(json => JSON.parse(json))
      .then(apiResponse => {
        if(apiResponse.status !== 'ok') {
          res.status(520).send('user didn`t create')
        } else {
          res.status(200).send(JSON.stringify(apiResponse))
        }
      })
      .catch(error => res.status(520).send(error))
  }
}

module.exports = new UserService()
