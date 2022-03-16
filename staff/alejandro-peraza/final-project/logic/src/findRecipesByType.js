const { models: { Recipe } } = require('data')
const { validators: { validateString } } = require('commons')

function findRecipesByType(type) {
    validateString(type, 'type')

    return Recipe.find({ type }).lean()
        .then(recipes => {
            recipes.forEach(recipe => {
                recipe.id = recipe._id.toString()

                delete recipe._id
                delete recipe.__v
            })

            return recipes
        })
}

module.exports = findRecipesByType