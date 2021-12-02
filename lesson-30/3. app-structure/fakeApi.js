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
    }
  )
}
