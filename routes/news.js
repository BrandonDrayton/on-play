const router = require('express').Router()
const { parse } = require('rss-to-json')

router.get('/', (req, res) => {
  const search = req.query.search
  parse(`https://news.google.com/rss/search?q=${search}&hl=en-US&gl=US&ceid=US:en`).then((data) => {
    res.json(data)
  })
})

module.exports = router
