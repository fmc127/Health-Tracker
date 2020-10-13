const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client'))

let health = []

app.get('/api/v1/health', (req, res) => {
    res.send(health)
})

app.post('/api/v1/health', function (req, res) {
    health.push({ awesomeObject: 'banana' })
    res.send('accepted')
})

app.put('/api/v1/health', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/api/v1/health', function (req, res) {
    health = []
    res.send('deleted')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


