const { Schema } = require('mongoose')

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
    
    Type: {
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

    Nivel:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = racket