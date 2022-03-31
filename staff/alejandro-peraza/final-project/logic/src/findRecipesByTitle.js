const { models: { Recipe } } = require('data')
const { validators: { validateString } } = require('commons')

function findRecipesByTitle(title) {
    validateString(title, 'title')

    const regex = new RegExp(title, 'i')

    return Recipe.find({ title: regex }).lean()
        .then(recipes => {
            recipes.forEach(recipe => {
                recipe.id = recipe._id.toString()

                delete recipe._id
                delete recipe.__v
            })

            return recipes
        })
}

module.exports = findRecipesByTitle