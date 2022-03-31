const  { validators: { validateId, validateString }} = require('commons');
const { models: { Recipe } } = require('data')

function updateRecipe(userId, recipeId, title, type, destilled, description) {
    validateId(userId, 'user id')
    validateId(recipeId, 'recipe id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(type, 'type')
    validateString(destilled, 'destilled')
   
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)
        

    return Recipe.updateOne({ user: userId, _id: recipeId, title, type, destilled, description })
        .then(result => {
            if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
        })
})
}

module.exports = updateRecipe









