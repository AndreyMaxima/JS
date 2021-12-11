const callbackInvoker = (callback) => setTimeout(() => callback && callback('SUCCESS'), 100)

const mockFetch = (isSuccess) => new Promise((res, rej) => {
  isSuccess ? res('SUCCESS') : rej('ERROR')
})

module.exports = {
  callbackInvoker,
  mockFetch
}
