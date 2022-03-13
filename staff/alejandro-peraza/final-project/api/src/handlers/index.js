const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')

const createComment = require('./createComment')
const updateComment = require('./updateComment')
const deleteComment = require('./deleteComment')

const createRecipe = require('./createRecipe')
const deleteRecipe = require('./deleteRecipe')
const updateRecipe = require('./updateRecipe')
const retrieveRecipe = require('./retrieveRecipe')
const retrieveFavRecipes = require('./retrieveFavRecipes')
/*
const findRecipeByTitle = require('./findRecipeByTitle')
const findRecipeByDestilled = require('./findRecipeByDestilled')
const findRecipeByType = require('./findRecipeByType')
*/

module.exports = {
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
    retrieveFavRecipes,
    deleteRecipe,
    updateRecipe,
    retrieveRecipe,
    /*
    findRecipeByTitle,
    findRecipeByType,
    findRecipeByDestilled
    */
}