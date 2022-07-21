const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')
const checkAuth = require('../middleware/checkAuth')

// GET /api/v1/register
router.post('/register', async (req, res) => {
  const { email, password, username } = req.body
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
  const user = await models.User.create({ email, password: hash, username })
  res.json({ success: 'registered successfully' })
  res.redirect('/login')
})
