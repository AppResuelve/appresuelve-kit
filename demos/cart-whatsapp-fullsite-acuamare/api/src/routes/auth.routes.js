const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth')

const router = require('express').Router()

router.post('/login', authController.login)
router.get('/me', authMiddleware, authController.me)
router.post('/validate-token', authController.validateToken)
router.post('/activate', authController.activate)
router.put('/change-password', authMiddleware, authController.changePassword)

module.exports = router
