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
    createComment,
    updateComment,
    deleteComment,
    createRecipe,
    findRecipeByName,
    findRecipeByType,
    findRecipeByDestilled,
    listRecipe,
    deleteRecipe

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
 
       // Review
  // Review // Review
   // Review // Review
    // Review // Review
     // Review // Review
      // Review // Review


      
        api.post('/users', jsonBodyParser, registerUser)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)
        api.post('/notes', jsonBodyParser, createComment)
        api.patch('/notes/:commentId', jsonBodyParser, updateComment)
        api.delete('/notes/:commentId', jsonBodyParser, deleteComment)
        api.post('/recipe', jsonBodyParser, createRecipe)
        /*api.post('/recipe', jsonBodyParser, findRecipeByName)
        api.post('/recipe', jsonBodyParser, findRecipeByType)
        api.post('/recipe', jsonBodyParser, findRecipeByDestilled)*/
        api.get('/recipe',listRecipe)
        api.delete('/recipe/:recipeId', jsonBodyParser, deleteRecipe)

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    }) 