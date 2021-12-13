const {getToken} = require('./token')
module.exports = {
  authorize: (password) => password === 'validpass' ? getToken() : false,
  returnString: () => 'string'
}
