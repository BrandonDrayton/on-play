const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')
const checkAuth = require('../middleware/checkAuth')

// GET /api/v1/users/register
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
})

// GET /api/v1/login
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
  const passwordValid = bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(400).json({ error: 'invalid password' })
  }
  // add user to session
  req.session.user = user
  // res.redirect('/http://localhost:3000/dashboard')
  res.status(201).json({ success: 'logged in successfully' })
})
