const userApi = require('../api/simpleApi/userApi')
const UserMapper = require('../mappers/userMapper')
const logger = require('../logger')
const format = require('string-format')
const {userRepository: messages} = require('../constants/loggerMessages')

class UsersRepository {
  getUserListThirdParty() {
    logger.info(messages.GET_USER_LIST_THIRD_PARTY_INVOKE)
    return userApi.getUserList()
       .then(apiResp => {
         logger.info(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_SUCCESS, apiResp))
         const result = UserMapper.mapThirdPartyUsersToUsers(JSON.parse(apiResp))
         logger.info(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(result)))
         return result
       }).catch(error => {
         logger.error(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_ERROR, JSON.stringify(error)))
         return Promise.reject(error)
      })
  }
}

module.exports = new UsersRepository();
