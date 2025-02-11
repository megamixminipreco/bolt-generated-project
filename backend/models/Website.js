const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Website = sequelize.define('Website', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  domain: {
    type: DataTypes.STRING,
    unique: true
  },
  template: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft'
  },
  configuration: {
    type: DataTypes.JSONB,
    defaultValue: {}
  }
})

module.exports = Website
