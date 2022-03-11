const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    
    recipe: {
        type: ObjectId,
        ref: 'Recipe',
        required: true
    },

    text: {
        type: String,
        required: true
    }
})

module.exports = comment