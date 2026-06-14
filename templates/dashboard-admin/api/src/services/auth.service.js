const jwt = require('jsonwebtoken')
const { User } = require('../models')

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name, role: user.role || 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
}

const login = async (email, password) => {
  const superEmail = process.env.SUPER_ADMIN_EMAIL
  const superPass = process.env.SUPER_ADMIN_PASSWORD
  if (superEmail && superPass && email === superEmail && password === superPass) {
    const superUser = { id: 0, name: 'Super Admin', email, role: 'super_admin' }
    const token = generateToken(superUser)
    return {
      token,
      user: { name: superUser.name, email: superUser.email, role: 'super_admin' },
    }
  }

  const user = await User.findOne({ where: { email } })
  if (!user) {
    throw Object.assign(new Error('Credenciales inválidas'), { status: 401 })
  }

  const valid = await user.comparePassword(password)
  if (!valid) {
    throw Object.assign(new Error('Credenciales inválidas'), { status: 401 })
  }

  const token = generateToken(user)
  return {
    token,
    user: { id: user.id, name: user.name, email: user.email, role: 'admin' },
  }
}

const me = async (userId) => {
  if (!userId) {
    return { id: 0, name: 'Super Admin', email: '', role: 'super_admin' }
  }

  const user = await User.findByPk(userId, {
    attributes: ['id', 'name', 'email'],
  })
  if (!user) {
    throw Object.assign(new Error('Usuario no encontrado'), { status: 404 })
  }
  return user
}

module.exports = { login, me }
