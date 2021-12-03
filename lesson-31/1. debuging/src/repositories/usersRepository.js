const FakeApi = require('../api/fakeApi')
const UserMapper = require('../mappers/userMapper')

class UsersRepository {
  getUserListThirdParty() {
    return FakeApi.getUserListThirdParty() // Получение данных от третьей стороны
       .then(apiResp => UserMapper.mapThirdPartyUsersToUsers(JSON.parse(apiResp)))
  }
}

module.exports = new UsersRepository();
