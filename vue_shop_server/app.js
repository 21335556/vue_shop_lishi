const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')
const app = express()

const options = {
  cert: fs.readFileSync('./full_chain.pem'),
  key: fs.readFileSync('./private.key')
}

// 写到静态之前
app.use(compression())
app.use(express.static('./dist'))

app.listen('80', () => {
  console.log('server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)