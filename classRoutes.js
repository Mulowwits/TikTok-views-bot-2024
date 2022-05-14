'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const classList = require('./classList') // our class list array

/* Request is the HTTP request. It can give us all the info about that, including the request
parameters, the headers, the body of the request, and more.

Response is the HTTP response object that we'll send to the client.
*/
// tell the appliation object to listen for GET requests on the /path using the get method
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList.getData()) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList.get(req.params.id)) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})
// routes for POST requests
router.post('/api/create', function (req, res) {
  console.log('Adding the following student:', req.body.student)
  // classList.push(req.body.student)
  classList.add(req.body.student)
  res.redirect(req.baseUrl)
})
router.post('/api/delete', function (req, res) {
  console.log('this will delete a student entry', req.body.deleteIndex)
  // classList.splice(req.body.deleteIndex, 1)
  classList.delete(req.body.deleteIndex)
  res.redirect(req.baseUrl)
})
router.post('/api/edit', function (req, res) {
  console.log('this will edit a student entry', req.body.newStudentID)
  //  classList[req.body.newStudentID] = req.body.newStudent
  classList.edit(req.body.newStudent, req.body.newStudentID)
  res.redirect(req.baseUrl)
})
module.exports = router
