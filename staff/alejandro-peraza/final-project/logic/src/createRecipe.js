const { models: { User, Recipe } } = require('data')
const { validators: { validateString, validateId } } = require('commons')


function createRecipe(userId, title, type, destilled, description, image) {
    
    validateId(userId, 'user')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(type, 'type')
    validateString(destilled, 'destilled')
   


   
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)

            return Recipe.create({ title, description, image, type, destilled })
                .then(recipe => { })
        })

}

module.exports = createRecipe
