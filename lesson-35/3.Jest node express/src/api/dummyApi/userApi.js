const {USER_URL, PAGE_FIELD, LIMIT_FIELD} = require("../../constants/api/dummyApi");
const {createGetWithPagination} = require("./common");
module.exports = {
  getUserList: createGetWithPagination(USER_URL, PAGE_FIELD, LIMIT_FIELD),
  getUser: (userId) => Promise.resolve(),
  createUser: (name, lastName) => Promise.resolve(),
  updateUser: (userId, userInfo) => Promise.resolve(),
  deleteUser: (userId) => Promise.resolve(),
}
