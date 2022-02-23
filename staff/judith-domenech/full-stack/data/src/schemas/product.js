const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const product = new Schema({
    brand: {
        type: ObjectId,
        ref:'Brand',
        required: true
    },
    model: {
        type: String,
        year: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    serial: {
        type: Number,
        required: true,
        unique: true   
    },
})

module.exports = product