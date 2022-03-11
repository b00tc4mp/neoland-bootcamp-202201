const { validators: { validateId } } = require('commons')
const { models: { Recipe } } = require('data')
const { User } = require('data/src/models')

function retrieveRecipe(userId, recipeId) {
    validateId(userId, 'userId')
    validateId(recipeId, 'recipeId')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Recipe.findById(recipeId).lean()
        })
        .then(recipe => {
            if (!recipe) throw new Error(`recipe with id ${recipeId} does not exist`)

            //sanitize
            delete recipe._id
            delete recipe.__v

            return recipe
        })
}

module.exports = retrieveRecipe