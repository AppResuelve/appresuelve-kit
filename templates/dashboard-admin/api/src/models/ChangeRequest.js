module.exports = (sequelize, DataTypes) => {
  const ChangeRequest = sequelize.define('ChangeRequest', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM('hero', 'hero_carousel', 'top_banner', 'top_banner_countdown'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'in_progress', 'done', 'cancelled'),
      defaultValue: 'pending',
      allowNull: false,
    },
    data: {
      type: DataTypes.JSONB,
      defaultValue: {},
      allowNull: false,
    },
    whatsappMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    adminNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'change_requests',
  })

  return ChangeRequest
}
