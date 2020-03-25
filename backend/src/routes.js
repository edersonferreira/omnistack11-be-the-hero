const express = require('express')
const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')
const connection = require('./database/connection')

const routes = express.Router()

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.get('/incidents', incidentsController.index)
routes.post('/incidents', incidentsController.create)
routes.delete('/incidents/:id', incidentsController.delete)

module.exports = routes