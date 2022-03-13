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

    createRecipe,
    retrieveRecipe,
    retrieveFavRecipes,
    updateRecipe,
    deleteRecipe,

    createComment,
    updateComment,
    deleteComment,
    /*
    findRecipeByTitle,
    findRecipeByType,
    findRecipeByDestilled
    */


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

        api.post('/recipe', jsonBodyParser, createRecipe)
        api.get('/recipe', retrieveRecipe)
        api.get('/recipe/fav',retrieveFavRecipes)
        api.patch('/recipe/:recipeId', jsonBodyParser, updateRecipe)
        api.delete('/recipe/:recipeId', jsonBodyParser, deleteRecipe)

        api.post('/notes', jsonBodyParser, createComment)
        api.patch('/notes/:commentId', jsonBodyParser, updateComment)
        api.delete('/notes/:commentId', jsonBodyParser, deleteComment)

        /*
        api.get('/recipe/title', findRecipeByTitle)
        api.get('/recipe/destilled', findRecipeByDestilled)
        api.get('./recipe/', findRecipeByType)
        */

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    }) 