const { models: { Recipe } } = require('data')
const { validators: { validateString } } = require('commons')

function findRecipesByDestilled(distilled) {
    validateString(distilled, 'distilled')

    return Recipe.find({ distilled }).lean()
        .then(recipes => {
            recipes.forEach(recipe => {
                recipe.id = recipe._id.toString()

                delete recipe._id
                delete recipe.__v
            })

            return recipes
        })
}

module.exports = findRecipesByDestilled