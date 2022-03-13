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
        enum: ['null', 'restaurante', 'bar', 'playa', 'hotel', 'hostal'],
        default: 'null'
    },

    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
        default: 'default'
    },

    address: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
        enum: ['null', 'barcelona', 'tarragona', 'girona'],
        default: 'null'
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }


})

module.exports = location



