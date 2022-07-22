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
  const id = Number(req.params.id)
  if (isNaN(id)) return res.status(404).json({ error: 'thread not found' })
  const thread = await models.Thread.findByPk(id)
  if (!thread) return res.status(404).json({ error: 'thread not found' })
  const comment = await thread.createComment({
    body: req.body.body,
    likes: 0,
    ParentId: req.body.parentId,
    UserId: req.session.user.id,
  })
  res.json(comment)
})

router.post('/:threadId/comment/:commentId', checkAuth, async (req, res) => {
  const threadId = Number(req.params.threadId)
  const commentId = Number(req.params.commentId)
  if (isNaN(threadId || commentId)) return res.status(404).json({ error: 'thread not found' })
  const thread = await models.Thread.findByPk(threadId)
  if (!thread) return res.status(404).json({ error: 'thread not found' })
  const subComment = await thread.createComment({
    body: req.body.body,
    ParentId: commentId,
    UserId: req.session.user.id,
  })
  res.json(subComment)
})

router.get('/:id', checkAuth, async (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) return res.status(404).json({ error: 'thread not found' })
  const thread = await models.Thread.findByPk(req.params.id, {
    include: [
      {
        model: models.Comment,
        where: { ParentId: null },
        include: ['Children'],
        required: false,
      },
      'Likes',
    ],
  })
  if (!thread) return res.status(404).json({ error: 'thread not found' })
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
