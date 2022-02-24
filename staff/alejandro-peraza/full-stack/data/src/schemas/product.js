const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const product = new Schema({
    brand: {
        type: ObjectId,
        ref: 'Brand',
        unique: true,
        required: true
    },

    model: [{
        type: String,
        year: Number,
        edition: String,
        required: true

    }],

    cost: {
        type: Number,
        required: true
    },

    serial: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = product