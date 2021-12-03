module.exports = {
  fakeCreateUser: (name, lastName) => new Promise(
    (res, rej) => {
      res(JSON.stringify({
        status: 'ok',
        name,
        lastName
      }))
    }
  )
}
