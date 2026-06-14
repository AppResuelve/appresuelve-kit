const internalController = require('../controllers/admin/internal.controller')
const internalAuth = require('../middleware/internalAuth')

const router = require('express').Router()

router.post('/create-admin', internalAuth, internalController.createAdmin)
router.post('/seed-settings', internalAuth, internalController.seedSettings)
router.post('/seed-products', internalAuth, internalController.seedProducts)

module.exports = router
