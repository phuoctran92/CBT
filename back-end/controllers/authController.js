const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body)

    const token = jwt.sign({ userID: user._id }, process.env.APP_SECRET)

    res.status(200).json({
      status: 'Success',
      data: { token, userName: user.name },
    })
  } catch (error) {
    res.json(error)
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        res.json('email fail')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ userID: user._id }, process.env.APP_SECRET)

      res.status(200).json({
        status: 'Login successfully',
        data: { token, userName: user.name },
      })
    } else {
        res.json('sai pass')
    }
  } catch (error) {
    res.json(error)
  }
}
