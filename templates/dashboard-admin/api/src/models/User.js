const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    tableName: 'users',
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10)
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 10)
        }
      },
    },
  })

  User.prototype.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
  }

  User.associate = () => {
    // User no tiene relaciones directas por ahora.
    // A futuro podría relacionarse con Order (atendido por) o ActivityLog.
  }

  return User
}
