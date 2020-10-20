const express = require('express')

const server = express()

server.use(express.json()) // this allows us to show json elements in the browser

server.use('/', (req, res) => {
    res.status(200)
    .json({message: 'Hello World'})
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Server is on port: ${PORT}`)
})

