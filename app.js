const express = require('express')
const router = require('./routes/routes')

const app = express()

app.use('/', router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    `server is listening on port: ${port}`
})