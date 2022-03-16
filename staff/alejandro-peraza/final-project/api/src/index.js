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
    createNote,
    updateNote,
    deleteNote,
    retrieveNote,
    findRecipes
} = require('./handlers')

const cors = require('cors')
const { env: { PORT, MONGODB_URL } } = process

connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()
        
        server.use(cors())
        
        const jsonBodyParser = express.json() // Sirve para capturar y convertir el body a objeto
        
        const api = express.Router()
 

      
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.post('/users', jsonBodyParser, registerUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)

        /*
        TODO later
        api.post('/recipes', jsonBodyParser, createRecipe)
        api.get('/recipes/:recipeId', retrieveRecipe)
        api.patch('/recipes/:recipeId', jsonBodyParser, updateRecipe)
        api.delete('/recipes/:recipeId', jsonBodyParser, deleteRecipe)
        */
        // TODO later api.get('/recipes/favs', retrieveFavRecipes)
        api.get('/recipes', findRecipes)



        api.post('/recipes/:recipeId/notes', jsonBodyParser, createNote)
        api.get('/recipes/:recipeId/notes/:noteId', retrieveNote)
        api.patch('/recipes/:recipeId/notes/:noteId', jsonBodyParser, updateNote)
        api.delete('/recipes/:recipeId/notes/:noteId',jsonBodyParser, deleteNote)
        
        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    }) 