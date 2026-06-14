const { Setting } = require('../../models')

const getSettings = async () => {
  const rows = await Setting.findAll()
  const settings = {}
  rows.forEach((row) => {
    settings[row.key] = row.value
  })
  return settings
}

module.exports = { getSettings }
