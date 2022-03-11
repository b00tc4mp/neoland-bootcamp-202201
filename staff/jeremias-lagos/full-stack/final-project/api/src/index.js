require('dotenv').config()
const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    createTournament,
    updateTournament,
    deleteTournament,
    listTournament,
    retrieveTournament,
    registerAdmin

} = require('./handlers')

const cors = require('cors')
const { env: { PORT, MONGODB_URL }} = process

connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()

        const api = express.Router()

        api.post('/users/admin', jsonBodyParser, registerAdmin)   
        api.post('/users', jsonBodyParser, registerUser)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)
        
        api.post('/tournament', jsonBodyParser, createTournament)
        api.get('/tournament', listTournament)
        api.patch('/tournament/:tournamentId', jsonBodyParser, updateTournament)
        api.delete('/tournament/:tournamentId', jsonBodyParser, deleteTournament)
        api.get('/tournament/:tournamentId', retrieveTournament)
        

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })