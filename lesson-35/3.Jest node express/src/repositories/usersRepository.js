const userApi = require('../api/simpleApi/userApi')
const UserMapper = require('../mappers/userMapper')
const logger = require('../logger')
const format = require('string-format')
const {userRepository: messages} = require('../constants/loggerMessages')

class UsersRepository {
  getUserListThirdParty() {
    logger.info(messages.GET_USER_LIST_THIRD_PARTY_INVOKE)
    return userApi.getUserList()
       .then(json => {
         const apiResp = JSON.parse(json)
         if(apiResp.error) {
           logger.error(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_ERROR, apiResp.error))
           return Promise.reject(apiResp.error)
         } else if (apiResp.data) {
           logger.info(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_SUCCESS, apiResp.data))
           const result = UserMapper.mapThirdPartyUsersToUsers(apiResp.data)
           logger.info(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_RESULT, JSON.stringify(result)))
           return result
         } else {
           logger.error(messages.GET_USER_LIST_THIRD_PARTY_EMPTY_RESULT)
         }
       }).catch(error => {
         logger.error(format(messages.GET_USER_LIST_THIRD_PARTY_REPLY_FAIL, JSON.stringify(error)))
         return Promise.reject(error)
      })
  }
}

module.exports = new UsersRepository();
