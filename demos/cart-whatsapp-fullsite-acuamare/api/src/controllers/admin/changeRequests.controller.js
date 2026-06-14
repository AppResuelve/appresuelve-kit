const changeRequestsService = require('../../services/admin/changeRequests.service')

const modules = (req, res) => {
  res.json(changeRequestsService.getModules())
}

const list = async (req, res, next) => {
  try {
    const result = await changeRequestsService.list(req.query)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

const getRemaining = async (req, res, next) => {
  try {
    const result = await changeRequestsService.getRemaining()
    res.json(result)
  } catch (err) {
    next(err)
  }
}

const create = async (req, res, next) => {
  try {
    const request = await changeRequestsService.create(req.body.type, req.body.data)
    res.status(201).json(request)
  } catch (err) {
    next(err)
  }
}

const update = async (req, res, next) => {
  try {
    const request = await changeRequestsService.update(req.params.id, req.body.data)
    res.json(request)
  } catch (err) {
    next(err)
  }
}

module.exports = { modules, list, getRemaining, create, update }
