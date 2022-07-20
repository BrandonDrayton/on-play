const router = require('express').Router()

router.get('/dashboard', (req, res) => {
  return res.redirect('/dashboard')
})

module.exports = router
