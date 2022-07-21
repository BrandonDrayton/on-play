const express = require('express')
const router = express.Router()
const models = require('../models')
const checkAuth = require('../middleware/checkAuth')

router.get('/user', checkAuth, async (req, res) => {
  const userThreads = await req.session.user.getThreads({
    order: [['createdAt', 'DESC']],
  })
  res.json(userThreads)
})

router.get('/all', checkAuth, async (req, res) => {
  const threads = await models.Thread.findAll({
    order: [['createdAt', 'DESC']],
  })
  res.json(threads)
})

router.post('/:id/comment', checkAuth, async (req, res) => {
  const thread = await models.Thread.findByPk(req.params.id)
  if (!thread) return res.status(404).json({ error: 'thread not found' })
  thread.addComment({
    body: req.body.body,
    likes: 0,
    parentId: req.body.parentId,
  })
})

router.get('/:id', checkAuth, async (req, res) => {
  const thread = await models.Thread.findByPk(req.params.id, {
    include: [
      {
        model: models.Comment,
        where: { ParentId: null },
        include: ['Children'],
      },
      'Likes',
    ],
  })
  res.json(thread)
})

router.post('/', checkAuth, async (req, res) => {
  const { text } = req.body
  const thread = await models.Thread.create({
    UserId: req.session.user.id,
    TeamId: req.session.user.FavoriteTeamId,
    text,
  })
  const newThread = await models.Thread.findByPk(thread.id, {
    include: [models.User],
  })
  res.json(newThread)
})

module.exports = router
