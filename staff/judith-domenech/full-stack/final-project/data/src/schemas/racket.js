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

    weight: {
        type: String,
        required: true,
        enum: ['345-350', '350-360', '360-370']
    },
    
    type: {
        type: String,
        required: true, 
        enum: ['Control', 'Potencia', 'Hybrida']
    },

    player: {
        type: String,
        required: true,
        enum: ['Aereo', 'Agresivo', 'Potencia', 'Tecnico', 'Control']
    },

    price: {
        type: Number,
        required: true
    },

    level:{
        type: String,
        required: true,
        enum: ['Principiante', 'Medio', 'Avanzado']
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