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
    saveNote,
    deleteNote,
    retrieveNote,
    findRecipes,
    retrieveRecipe,
    logicaVentu
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
        api.delete('/recipes/:recipeId', jsonBodyParser, deleteRecipe)
        api.patch('/recipes/:recipeId', jsonBodyParser, updateRecipe)
        */
       // TODO later api.get('/recipes/favs', retrieveFavRecipes)
       api.get('/recipes', findRecipes)
       api.get('/recipes/:recipeId', retrieveRecipe)
       
      

        api.post('/recipes/:recipeId/notes', jsonBodyParser, saveNote)
        api.get('/recipes/:recipeId/note', retrieveNote)
        api.delete('/recipes/:recipeId/notes/:noteId',jsonBodyParser, deleteNote)
        
        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    }) 