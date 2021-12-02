const UserRepository = require('../repositories/usersRepository')

class UserService {
  // Здесь происходит запросы и обработки данных
  getUserList(req, res) {
    // Обработка значений запроса и вызов слоя(ёв) хранения (репозитория(ев))
    UserRepository.getUserListThirdParty()
      .then(apiResponse => res.status(200).send(apiResponse))
      .catch(error => res.status(520).send(error))
  }
}

module.exports = new UserService()
