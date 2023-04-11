const express = require('express')
const router = express.Router()
const loginController = require('../controllers/LoginController')

router.post('/register', loginController.register)
router.post('/login', loginController.login)


module.exports = router