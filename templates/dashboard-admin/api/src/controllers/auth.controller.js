const authService = require('../services/auth.service')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const result = await authService.login(email, password)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

const me = async (req, res, next) => {
  try {
    const userId = req.user.id || null
    const user = await authService.me(userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = { login, me }
