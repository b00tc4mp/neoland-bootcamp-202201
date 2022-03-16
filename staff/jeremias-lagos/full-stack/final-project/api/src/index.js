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
    registerAdmin,
    searchTournaments

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
        
        api.post('/tournaments', jsonBodyParser, createTournament)
        api.get('/tournaments', jsonBodyParser, searchTournaments)
        api.patch('/tournaments/:tournamentId', jsonBodyParser, updateTournament)
        api.delete('/tournaments/:tournamentId', jsonBodyParser, deleteTournament)
        api.get('/tournaments/:tournamentId', retrieveTournament)


        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })