const { Schema } = require('mongoose')


const recipe = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
        enum: ['classic', 'modern', 'non-alcoholic'],
        default: 'classic'
    },

    distilled: {
        type: String,
        required: true,
        enum: ['none', 'vodka', 'whisky', 'ron', 'gin', 'tequila', 'brandy', 'bourbon', 'vermouth'],
        default: 'none'
    }
})

module.exports = recipe