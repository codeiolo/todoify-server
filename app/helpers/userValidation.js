const jwt = require('jsonwebtoken')

module.exports = function validateUser (req, res, next) {
  if (req.headers['x-access-token'] || req.headers['authorization']) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length)
    }

    jwt.verify(token, req.app.get('secretKey'), (err, decoded) => {
      if (err) {
        res.status(401).json({
          status: 'error',
          message: 'Could not verify token, pass it in header as authorization',
          clientMessage: 'Not authorized'
        })
      } else {
        req.body.userId = decoded.id
        next()
      }
    })
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Could not verify token, pass it in header as authorization',
      clientMessage: 'Not authorized'
    })
  }
}
