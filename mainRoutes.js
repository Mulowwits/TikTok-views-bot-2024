'use strict'
const path = require('path')
const express = require('express')
const mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('Hello World. I\'m a Node app.')
})

// route for a GET request to the path "/about"
mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

module.exports = mainRouter
