'use strict'
const express = require('express')
const app = express() // instatiate an application
// load our routers

const mainRouter = require('./mainRoutes.js')
const classRouter = require('./classRoutes.js')
// loading boadyParser
const bodyParser = require('body-parser')

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extened: true }))
// mounting our routers
app.use('/', mainRouter)
app.use('/class', classRouter)
app.use('/cdn', express.static('public')) // mounts the public directory to /cdn (scripts folder wil be at /cdn/scripts)
app.listen(3000, () => console.log('Express server running on port 3000')) // starts the server and tells it to listen on port 3000
// console.log('Express server running on port 3000')
