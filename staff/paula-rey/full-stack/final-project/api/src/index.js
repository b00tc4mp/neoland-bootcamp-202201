require('dotenv').config()

const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const { registerUser, 
        retrieveUser,
        authenticateUser,
        updateUser,
        updateUserPassword,
        deleteUser,
        createLocation,
        retrieveLocation,
        updateLocation,
        listUserLocations,
        deleteLocation,
        searchLocations

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


        api.post('/users', jsonBodyParser, registerUser) 
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)

        api.post('/locations', jsonBodyParser, createLocation)
        api.get('/user/:userId/locations', jsonBodyParser, listUserLocations)
        api.patch('/locations/:locationId', jsonBodyParser, updateLocation)
        api.get('/locations/:locationId', jsonBodyParser, retrieveLocation)
        api.delete('/locations/:locationId', jsonBodyParser, deleteLocation)
        api.get('/locations/?q=', )
        
        api.post('/comments', jsonBodyParser, createComment)
        api.get('/comments/:commentId', jsonBodyParser, retrieveComment)
        api.get('/' listLocationsComments)
        api.delete('/', deleteComment)



        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))

    })