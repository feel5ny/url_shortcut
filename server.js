const express = require('express')
const morgan = require('morgan')
const basicAuth = require('express-basic-auth')
const randomString = require('randomstring')

const app = express()

const data = [
  {
    longUrl: 'http://feel5ny.me', 
    id: randomString.generate(6)
  }
]
// http://logcalhost:3000/58DX37
// 302 응답

app.use(basicAuth({
  users: { 'admin': 'admin' },
  challenge: true,
  realm: 'Imb4T3st4pp'
}))


app.set('view engine', 'ejs')
app.use('/static', express.static('public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.render('index.ejs',{data})
})

app.listen(3000, () => {
  console.log('listening...')
})