const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const sequelize = require('./config/database')
const authRoutes = require('./routes/authRoutes')

// Models
const User = require('./models/User')
const Website = require('./models/Website')

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

// Database Connection
const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connected successfully.')
    
    // Sync models
    await User.sync({ alter: true })
    await Website.sync({ alter: true })

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    process.exit(1)
  }
}

connectDB()
