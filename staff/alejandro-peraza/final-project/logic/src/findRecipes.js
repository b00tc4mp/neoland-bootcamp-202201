const { models: { Recipe } } = require('data')
const { validators: { validateString } } = require('commons')


function findRecipes(query) {
    validateString (query, 'query')

    const QUERY_REGEX = new RegExp(query, "i")


    return Recipe.find({$or:[{title: QUERY_REGEX},{type: QUERY_REGEX},{destilled: QUERY_REGEX}]}).lean()
        .then(recipes => {
           
           recipes.forEach(recipe => {
               recipe.id = recipe._id.toString()

                delete recipe._id
                delete recipe.__v
            })

            return recipes
        })
}

module.exports = findRecipes


