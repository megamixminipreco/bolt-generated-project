const User = require('../models/User')
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body

  try {
    const userExists = await User.findOne({ 
      where: { 
        email 
      } 
    })

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({
      username,
      email,
      password,
      role: role || 'viewer'
    })

    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user.id)
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })

    if (user && (await user.comparePassword(password))) {
      user.lastLogin = new Date()
      await user.save()

      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user.id)
      })
    } else {
      res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  registerUser,
  loginUser
}
