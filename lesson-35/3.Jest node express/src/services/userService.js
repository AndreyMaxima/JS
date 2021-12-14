const UserRepository = require('../repositories/usersRepository')
const UserActions = require('../actions/usersActions')
const logger = require('../logger')
const format = require('string-format')
const { userService: messages } = require('../constants/loggerMessages')

class UserService {
  getUserList(req, res) {
    logger.info(messages.GET_USER_LIST_INPUT_PARAMS)
    UserRepository.getUserListThirdParty()
      .then(response => {
        const result = JSON.stringify(response)
        logger.info(format(messages.GET_USER_LIST_SUCCESS, 200, result))
        res.status(200).send(result)
      })
      .catch(error => {
        logger.info(format(messages.GET_USER_LIST_ERROR, 520, error))
        res.status(520).json(error)
      })
  }

  createUser(req, res) {
    logger.info(format(messages.CREATE_USER_INPUT_PARAMS, JSON.stringify(req.body))) // Логирование значимой части запроса
    UserActions.createUser(req.body.name, req.body.lastName)
      .then(json => JSON.parse(json))
      .then(response => {
        const result = JSON.stringify(response)
          logger.info(format(messages.CREATE_USER_SUCCESS, 200, result))
          res.status(200).send(result)
      })
      .catch(error => {
        logger.info(format(messages.CREATE_USER_ERROR, 520, error))
        res.status(520)
          .send(error)
      })
  }
}

module.exports = new UserService()
