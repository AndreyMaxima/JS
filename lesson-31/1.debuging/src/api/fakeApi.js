module.exports = {
  getUserListThirdParty: () => new Promise(
    (res, rej) => {
      res(JSON.stringify([
        {
          name: 'Andreas',
          lastName: 'Valent',
          type: 1,
          other: 'filed'
        },
        {
          name: 'Second',
          lastName: 'User',
          type: 2,
          other: 'filed'
        },
        {
          name: 'Third',
          lastName: 'User',
          type: 1,
          other: 'filed'
        },
      ]))
      // rej({status: 'neok', desc:'none'})
    }
  ),
  fakeCreateUser: (name, lastName) => new Promise(
    (res, rej) => {
      // res(JSON.stringify({
      //   status: 'ok',
      //   name,
      //   lastName
      // }))
      // rej(JSON.stringify({
      //   desc: 'UNCORRECT_DATA'
      // }))
      res(JSON.stringify({
        status: 'error'
      }))
    }
  )
}
