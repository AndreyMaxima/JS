const FakeApi = require('../api/simpleApi/userApi')
const logger = require('../logger')
const format = require('string-format')
const { userActions: messages } = require('../constants/loggerMessages')

class UsersActions {
  createUser(name, lastName) {
    logger.info(format(messages.CREATE_USER_INVOKE, name, lastName))
    return FakeApi.createUser(name, lastName)
      .then(apiResp => {
        logger.info(format(messages.CREATE_USER_REPLY_SUCCESS, apiResp))
        return apiResp
      })
      .catch(errors => {
        logger.error(format(messages.CREATE_USER_REPLY_ERROR, errors))
        return Promise.reject(errors)
      })
  }
}

module.exports = new UsersActions()
