const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3000

require('dotenv').config()
mongoose.connect('mongodb://localhost:27017/miniwordpress', { useNewUrlParser: true })

const indexRoute = require('./routes/index')
const articleRoute = require('./routes/route_article')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', indexRoute)
app.use('/article', articleRoute)

// app.get('/', (req, res) => {
//   res.status(200).json({
//     display: 'Masuk'
//   })
// })

// app.post('/article', (req,res) => {
//   res.status(201).json({
//     article: req.body.data.article,
//     description: req.body.data.description
//   })
//   console.log(req.body.data.article)
// })

app.listen(port, () => {
  console.log('Listening on port ' + port)
})