const path = require('path')
const express = require('express')

// const buzzword = require('./routes/buzzWords.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/buzzword', buzzword)

module.exports = server
