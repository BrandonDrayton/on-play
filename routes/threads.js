const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')
const checkAuth = require('../middleware/checkAuth')

router.post('/', checkAuth, async (req, res) => {
  const { title, body } = req.body
  const thread = await models.Thread.create({
    UserId: req.session.user.id,
    TeamId: req.session.user.FavoriteTeamId,
    title,
    body,
  })
  const newThread = await models.Thread.findByPk(thread.id, {
    include: [models.User],
  })
  res.json(newThread)
})

module.exports = router
