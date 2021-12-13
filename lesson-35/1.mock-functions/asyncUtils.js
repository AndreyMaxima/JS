const callbackInvoker = (callback) => setTimeout(() => callback && callback('SUCCESS'), 100)


module.exports = {
  callbackInvoker,
}
