module.exports = {
  userService: {
    GET_USER_LIST_INPUT_PARAMS: '[UserService.getUserList] NO INPUT PARAMS',
    GET_USER_LIST_SUCCESS: '[UserService.getUserList] success status={} response={}',
    GET_USER_LIST_ERROR: '[UserService.getUserList] error status={} response={}',

    CREATE_USER_INPUT_PARAMS: '[UserService.createUser] INPUT PARAMS body={}',
    CREATE_USER_SUCCESS: '[UserService.createUser] success status={} response={}',
    CREATE_USER_FAIL: '[UserService.createUser] fail status={} response={}',
    CREATE_USER_ERROR: '[UserService.createUser] error status={} response={}',
  },
  userRepository: {
    GET_USER_LIST_THIRD_PARTY_INVOKE: '[UserRepository.getUserListThirdParty] invoke fakeApi.getUserListThirdParty',
    GET_USER_LIST_THIRD_PARTY_REPLY_SUCCESS: '[UserRepository.getUserListThirdParty] reply {}',
    GET_USER_LIST_THIRD_PARTY_REPLY_ERROR: '[UserRepository.getUserListThirdParty] error {}',
    GET_USER_LIST_THIRD_PARTY_REPLY_FAIL: '[UserRepository.getUserListThirdParty] failed to fetch {}',
    GET_USER_LIST_THIRD_PARTY_REPLY_RESULT: '[UserRepository.getUserListThirdParty] result {}',
    GET_USER_LIST_THIRD_PARTY_EMPTY_RESULT: '[UserRepository.getUserListThirdParty] error. Returned empty result',
  },
  userActions: {
    CREATE_USER_INVOKE: '[UserActions.createUser] invoke fakeApi.fakeCreateUser name={} lastName={}',
    CREATE_USER_REPLY_SUCCESS: '[UserActions.createUser] success {}',
    CREATE_USER_REPLY_ERROR: '[UserActions.createUser] error {}',
  }
}
