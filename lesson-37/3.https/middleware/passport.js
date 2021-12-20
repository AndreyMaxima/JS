const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt')
const {JWT_SECRET} = require('../config/jwt')
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      console.log(payload.login)
      done(null, true)
    })
  )
}
