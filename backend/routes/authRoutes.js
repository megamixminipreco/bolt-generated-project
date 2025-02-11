const express = require('express')
const { registerUser, loginUser } = require('../controllers/authController')
const { protect, admin } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/register', protect, admin, registerUser)
router.post('/login', loginUser)

module.exports = router
