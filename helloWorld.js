const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => res.send('Hello World!, express.js'))

app.listen(port, () => console.log(`Hello World app listening at http://localhost:${port}`))