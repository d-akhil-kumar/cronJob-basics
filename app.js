require('dotenv').config()

const express = require('express')
const router = require('./routes/routes')
//const cronJob = require('./utils/cronJob')
const cronJob = require('node-cron')

const app = express()

app.use('/', router)

cronJob.schedule('* * * * *', function() {
    console.log('running a task every minute');
});

const port = process.env.PORT_NO || 3000

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})