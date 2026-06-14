require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') })

const { sequelize, User, Category } = require('../models')

const seed = async () => {
  try {
    await sequelize.authenticate()
    console.log('DB conectada.')

    await sequelize.sync({ force: true })
    console.log('Tablas recreadas.')

    // Admin user
    const admin = await User.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@admin.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
    })
    console.log('Admin creado:', admin.email)

    // Categorías por defecto
    const defaultCategories = [
      { name: 'General', slug: 'general', order: 0 },
    ]
    await Category.bulkCreate(defaultCategories)
    console.log('Categorías default creadas.')

    console.log('Seed completado.')
    process.exit(0)
  } catch (err) {
    console.error('Error en seed:', err)
    process.exit(1)
  }
}

seed()
