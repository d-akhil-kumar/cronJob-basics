const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.send('welcome')
})

router.get('/login', (req,res) => {
    res.send('login')
})

router.all('*', (req,res) => {
    res.send('404 page not found')
})

module.exports = router