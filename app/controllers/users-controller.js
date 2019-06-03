const userModel = require('../models/users-model')
const brypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  create: (req, res, next) => {
    userModel.findOne({ email: req.body.email }, (err, existing) => {
      if (err) {
        next(err)
      } else if (existing) {
        res.status(400).json({ status: 'error', message: 'Email is already registered' })
      } else {
        userModel.create({
          email: req.body.email,
          password: req.body.password
        },
        (err, result) => {
          if (err) {
            next(err)
          } else {
            res.status(201).json({ status: 'success', message: 'User account is created.' })
          }
        })
      }
    })
  },
  authenticate: (req, res, next) => {
    userModel.findOne({ email: req.body.email }, (err, userInfo) => {
      if (err) {
        next(err)
      } else {
        if (!userInfo) {
          res.status(400).json({ status: 'error', message: 'Could not authenticate. Check email or password' })
        } else {
          if (brypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' })
            res.status(200).json({ status: 'success', message: 'Successfully authenticated', data: userInfo, token: token })
          } else {
            res.status(400).json({ status: 'error', message: 'Could not authenticate. Check email or password' })
          }
        }
      }
    })
  }
}
