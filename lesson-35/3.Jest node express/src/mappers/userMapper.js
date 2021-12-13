const UserUtils = require('../utils/usersUtils')

class UserMapper {
  mapThirdPartyUsersToUsers(userList) {
    return userList.map(user => ({
      fullname: `${user.name} ${user.lastName}`,
      role: UserUtils.getRoleByType(user.type)
    }))
  }
}

module.exports = new UserMapper()
