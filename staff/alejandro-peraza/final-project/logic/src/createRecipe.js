const { models: { Recipe } } = require('data')
const { validators: { validateString, validateId } } = require('commons')


function createRecipe(userId, title, type, destilled, description, image) {
    // TODO validate user id
    validateId(userId, 'user id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(type, 'type')
    validateString(destilled, 'destilled')
    /*validateString(role) ?*/


    // TODO check user exists first, and it is an admin
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)

            return Recipe.create({ title, destilled, description, image })
                .then(recipe => { })
        })

}

module.exports = createRecipe
