const FakeApi = require('../../fakeApi')

class UsersRepository {
  getUserListThirdParty() {
    return FakeApi.getUserListThirdParty() // Получение данных от третьей стороны
       .then(apiResp => apiResp.json())
  }
}

module.exports = new UsersRepository();
