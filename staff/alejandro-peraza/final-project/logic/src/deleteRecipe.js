const { models: { Recipe }} = require('data')
const { validators: { validateId }} = require('commons')

function deleteRecipe(userId, recipeId) {
  
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    
    return Recipe.deleteOne({ user: userId, _id: recipeId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`recipe with id ${recipeId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteRecipe