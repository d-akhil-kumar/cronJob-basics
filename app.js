require('dotenv').config()

const express = require('express')
const router = require('./routes/routes')

const app = express()

app.use('/', router)

const port = process.env.PORT_NO || 3000

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})