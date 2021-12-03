class UsersUtils {
  getRoleByType(type) {
    switch (type) {
      case 1: return 'ADMIN'
      case 2: return 'MODER'
      default: return 'UNKNOWN'
    }
  }
}

module.exports = new UsersUtils()
