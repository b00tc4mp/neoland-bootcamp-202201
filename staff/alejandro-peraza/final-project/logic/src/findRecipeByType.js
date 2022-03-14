const { models: { Recipe } } = require('data')
const { validators: { validateId } } = require('commons')

function recipeByType(recipeId) {
    validateId(recipeId, 'recipeId')
    return Recipe.findById(recipeId)
        .then(recipe => {

            if(!recipe) throw new Error(`recipe with id ${recipeId} does not exist`)
            
            return recipe
        })
}

module.exports = recipeByType