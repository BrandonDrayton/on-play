const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')
const checkAuth = require('../middleware/checkAuth')

// GET /api/v1/users/register
router.post('/register', async (req, res) => {
  const { name, email, password, username, iconText, iconColor } = req.body
  // if required fields missing, send error
  if (!email || !password || !username) {
    return res.status(400).json({ error: 'missing email and/or password' })
  }
  const existingUser = await models.User.findOne({
    where: { email },
  })
  if (existingUser) {
    res.status(400).json({ error: 'Email already in use' })
    return
  }
  // create new user in database and send success message
  const hash = await bcrypt.hash(password, 10)
  const user = await models.User.create({ name, email, password: hash, username, iconText, iconColor })
  res.json({ success: 'registered successfully' })
})

// GET /api/v1/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  // if required fields missing, send error
  if (!email || !password) {
    return res.status(400).json({ error: 'missing email and/or password' })
  }
  // find user in database
  const user = await models.User.findOne({ where: { email } })
  // if no user found, send error
  if (!user) {
    return res.status(400).json({ error: 'email incorrect' })
  }
  // if password is invalid, send error
  const passwordValid = await bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(400).json({ error: 'invalid password' })
  }
  // add user to session
  req.session.user = user
  res.status(201).json({ success: 'logged in successfully' })
})

// GET /api/v1/users/favorite
router.post('/favorite', async (req, res) => {
  const { team, sport, league, espnTeamId } = req.body
  // if required fields missing, send error
  if (!team || !sport || !league || !espnTeamId) {
    return res.status(400).json({ error: 'Please include all required fields' })
  }
  const [favoriteTeam] = await models.Team.findOrCreate({
    where: {
      name: team,
      sport,
      league,
      espnTeamId,
    },
  })
  req.session.user.setTeam(favoriteTeam)
  res.json(favoriteTeam)
})

router.get('/favorite', async (req, res) => {
  const { team, sport, league, espnTeamId } = req.body
  // if required fields missing, send error
  if (!team || !sport || !league || !espnTeamId) {
    return res.status(400).json({ error: 'Please include all required fields' })
  }
  const [favoriteTeam] = await models.Team.findOrCreate({
    where: {
      name: team,
      sport,
      league,
      espnTeamId,
    },
  })
  req.session.user.setTeam(favoriteTeam)
  res.json(favoriteTeam)
})

router.get('/current', checkAuth, async (req, res) => {
  if (!req.session) {
    res.json(null)
    return
  }
  res.json(req.session.user)
})

// GET /api/v1/users/logout
router.get('/logout', async (req, res) => {
  req.session.user = null
  res.json({ success: 'logged out successfully' })
})
// POST /api/v1/users/logout
router.post('/logout', async (req, res) => {
  req.session.user = null
  res.json({ success: 'logged out successfully' })
})

module.exports = router
