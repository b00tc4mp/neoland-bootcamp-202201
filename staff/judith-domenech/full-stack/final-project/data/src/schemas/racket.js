const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const comment = require('./comment')

const racket = new Schema({
    brand: {
        type: ObjectId,
        ref:'Brand',
        required: true
    },
    
    model: {
        type: String,
        required: true
    },

    weigth: {
        type: Number,
        required: true
    },
    
    type: {
        type: String,
        required: true, 
    },

    player: {
        type: String,
        required: true,     
    },

    price: {
        type: Number,
        required: true
    },

    nivel:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    comments:[comment],
    
    image: {
        type: String,
        required: true
    }
})

module.exports = racket