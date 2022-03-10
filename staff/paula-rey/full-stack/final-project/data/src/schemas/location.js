const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


const location = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    type: {
        type: String,
        required: true,
        enum: ['Restaurante', 'Bar', 'Playa', 'Hotel', 'Hostal']
    },

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    address: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
        enum: ['Barcelona', 'Tarragona', 'Girona']
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }


})

module.exports = location



