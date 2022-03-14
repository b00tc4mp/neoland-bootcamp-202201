require('dotenv').config()
const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveUserPublicInfo,
    listFavorites,
    listFriends,
    findUsers,
    toggleFavorite,
    toggleFriend,
    updateUser,
    updateUserPassword,
    deleteUser,
    createAction,
    retrieveAction,
    listUserPublicActions,
    listUserActions,
    updateAction,
    findActions,
    deleteAction,
    createSchedule,
    retrieveSchedule,
    listSchedules,
    updateSchedule,
    cancelSchedule,
} = require('./handlers')
const cors = require('cors')

const { env: { PORT, MONGODB_URL } } = process

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
        api.get('/users/public/:consultedUserId', retrieveUserPublicInfo)
        api.get('/users/favorites', listFavorites)
        api.get('/users/friends', listFriends)
        api.get('/users/search', findUsers)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/favorites/:actionId', toggleFavorite)
        api.patch('/users/friends/:friendId', toggleFriend)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)

        api.post('/actions', jsonBodyParser, createAction)
        api.get('/actions', findActions)
        api.get('/actions/:actionId', retrieveAction)
        api.get('/users/actions', listUserActions)
        api.get('/users/:consultedUserId/actions', listUserPublicActions)
        api.patch('/actions/:actionId', jsonBodyParser, updateAction)
        api.delete('/action/:actionId', jsonBodyParser, deleteAction)

        api.post('/schedules/:actionId', jsonBodyParser, createSchedule)
        api.get('/schedules', listSchedules)
        api.get('/schedules/:scheduleId', retrieveSchedule)
        api.patch('/schedules/:scheduleId', jsonBodyParser, updateSchedule)
        api.delete('/schedule/:scheduleId', jsonBodyParser, cancelSchedule)

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })
