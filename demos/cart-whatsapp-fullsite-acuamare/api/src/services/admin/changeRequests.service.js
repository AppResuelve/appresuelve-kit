const { ChangeRequest } = require('../../models')

const MODULES = {
  hero: {
    label: 'Hero',
    icon: '🎯',
    fields: ['headline', 'subheadline', 'ctaText', 'backgroundImage'],
  },
  hero_carousel: {
    label: 'Hero Carrusel',
    icon: '🎠',
    fields: ['slides'],
  },
  top_banner: {
    label: 'Banner Superior',
    icon: '📢',
    fields: ['text', 'backgroundColor', 'link'],
  },
  top_banner_countdown: {
    label: 'Banner con Cuenta Atrás',
    icon: '⏰',
    fields: ['text', 'deadline', 'backgroundColor', 'link'],
  },
}

const getModules = () => MODULES

const list = async (query = {}) => {
  const { page = 1, limit = 20 } = query
  const offset = (page - 1) * limit

  const { count, rows } = await ChangeRequest.findAndCountAll({
    order: [['createdAt', 'DESC']],
    limit: Number(limit),
    offset,
  })

  return {
    requests: rows,
    total: count,
    page: Number(page),
    totalPages: Math.ceil(count / limit),
  }
}

const getRemaining = async () => {
  const { Setting } = require('../../models')
  const settings = {}
  const rows = await Setting.findAll()
  rows.forEach((r) => { settings[r.key] = r.value })

  const limit = settings.monthly_changes_limit ?? 2
  const now = new Date()
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

  let used = settings.changes_this_month ?? 0
  if (settings.changes_month !== monthKey) {
    used = 0
    await Setting.upsert({ key: 'changes_this_month', value: 0 })
    await Setting.upsert({ key: 'changes_month', value: monthKey })
  }

  return { limit, used, remaining: limit - used, canRequest: used < limit }
}

const create = async (type, data) => {
  const { Setting } = require('../../models')

  const { remaining } = await getRemaining()
  if (remaining <= 0) {
    throw Object.assign(new Error('Ya alcanzaste el límite de cambios de este mes.'), { status: 429 })
  }

  const module = MODULES[type]
  if (!module) {
    throw Object.assign(new Error('Módulo no válido.'), { status: 400 })
  }

  const whatsappMessage = `🛠 *Solicitud de cambio: ${module.icon} ${module.label}*

${Object.entries(data).map(([k, v]) => `• *${k}:* ${v}`).join('\n')}`

  const request = await ChangeRequest.create({
    type,
    data,
    whatsappMessage,
  })

  const phone = process.env.WHATSAPP_NOTIFY_NUMBER || ''
  const whatsappLink = phone
    ? `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    : ''

  const now = new Date()
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

  const settings = {}
  const rows = await Setting.findAll()
  rows.forEach((r) => { settings[r.key] = r.value })

  if (settings.changes_month !== monthKey) {
    await Setting.upsert({ key: 'changes_this_month', value: 1 })
    await Setting.upsert({ key: 'changes_month', value: monthKey })
  } else {
    await Setting.upsert({ key: 'changes_this_month', value: (settings.changes_this_month ?? 0) + 1 })
  }

  return { ...request.toJSON(), whatsappLink }
}

const update = async (id, data) => {
  const request = await ChangeRequest.findByPk(id)
  if (!request) {
    throw Object.assign(new Error('Solicitud no encontrada'), { status: 404 })
  }
  if (request.status !== 'pending') {
    throw Object.assign(new Error('Solo se pueden editar solicitudes pendientes'), { status: 400 })
  }

  const module = MODULES[request.type]
  const whatsappMessage = `🛠 *Solicitud de cambio (editada): ${module?.icon || ''} ${module?.label || request.type}*

${Object.entries(data).map(([k, v]) => `• *${k}:* ${v}`).join('\n')}`

  const phone = process.env.WHATSAPP_NOTIFY_NUMBER || ''
  const whatsappLink = phone
    ? `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    : ''

  const updated = await request.update({ data, whatsappMessage })

  return { ...updated.toJSON(), whatsappLink }
}

const updateStatus = async (id, status, adminNotes) => {
  const request = await ChangeRequest.findByPk(id)
  if (!request) {
    throw Object.assign(new Error('Solicitud no encontrada'), { status: 404 })
  }
  return request.update({ status, ...(adminNotes && { adminNotes }) })
}

module.exports = { getModules, list, getRemaining, create, update, updateStatus }
