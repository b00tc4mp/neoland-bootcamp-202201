require('dotenv').config()

const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const { registerUser, 
        retrieveUser,
        authenticateUser,
        updateUser,
        updateUserPassword,
        listUserLocations,
        toggleFavorite,
        listFavorites,
        toggleFollow,
        listFollows,
        deleteUser,
        createLocation,
        retrieveLocation,
        updateLocation,
        deleteLocation,
        searchLocations,
        createComment,
        retrieveComment,
        listLocationComments,
        deleteComment


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
        api.get('/users/locations', jsonBodyParser, listUserLocations)
        api.patch('/users/toggle-favorite', jsonBodyParser, toggleFavorite)
        api.get('/users/favorites', jsonBodyParser, listFavorites)
        api.patch('/users/toggle-follow', jsonBodyParser, toggleFollow)
        api.get('/users/follows', jsonBodyParser, listFollows)
        api.delete('/users', jsonBodyParser, deleteUser)
        
        api.post('/locations', jsonBodyParser, createLocation)
        api.patch('/locations/:locationId', jsonBodyParser, updateLocation)
        api.get('/locations/:locationId', jsonBodyParser, retrieveLocation)
        api.delete('/locations/:locationId', jsonBodyParser, deleteLocation)
        api.get('/locations', searchLocations)
        
        api.post('/locations/:locationId/comments', jsonBodyParser, createComment)
        api.get('/locations/:locationId/comments/:commentId', jsonBodyParser, retrieveComment)
        api.get('/locations/:locationId/comments', jsonBodyParser, listLocationComments)
        api.delete('/locattions/:locationId/comments/:commentId', deleteComment)



        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))

    })