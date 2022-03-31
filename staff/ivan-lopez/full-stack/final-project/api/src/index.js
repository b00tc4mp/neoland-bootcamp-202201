require('dotenv').config()

const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
        registerUser, 
        retrieveUser,
        authenticateUser,
        updateUser,
        updateUserPassword,
        deleteUser,
        addProduct,
        deleteProduct,
        retrieveProduct,
        updateProduct,
        registerAdmin,
        findProducts


     } = require('./handlers')

const cors = require('cors')
const { application } = require('express')

const { env: { PORT, MONGODB_URL }} = process

connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()

        const api = express.Router()

        
        api.post('/users/admin', jsonBodyParser, registerAdmin)
        api.post('/users/', jsonBodyParser, registerUser)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)


        api.post('/products', jsonBodyParser, addProduct)
        api.get('/products/:productId', retrieveProduct)
        api.get('/products/', findProducts)
        api.patch('/products/:productId', jsonBodyParser, updateProduct)
        api.delete('/products/:productId', jsonBodyParser, deleteProduct)

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))

    })