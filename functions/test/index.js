const app = require('express')()
const cors = require('cors')
require('express-async-errors')

app.use(cors())
app.use(require('../middlewears/verifyToken'))

app.post('/', async (req, res) => {
  res.send('post ok')
})

app.get('/', (req, res) => {
  res.send('get ok')
})

app.get('/:id', (req, res) => {
  res.send('get ok' + req.params.id)
})

// 수정
app.put('/:id', (req, res) => {
  res.send('put ok' + req.params.id)
})

// 삭제
app.delete('/:id', (req, res) => {
  res.send('delete ok' + req.params.id)
})

app.use(require('../middlewears/error'))

module.exports = app
