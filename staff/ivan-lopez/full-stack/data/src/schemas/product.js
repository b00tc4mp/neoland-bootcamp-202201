// properties

// - brand (object id)
// - model (string)
// - cost (number)
// - price (number)
// - serial (string)

//TODO implement me
const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const product = new Schema ({
    brand: [{
        type: ObjectId,
        required: true

    }],

    model: {
        type: String,
        year: Number,
        edition: String,
        required: true,

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
        type: String,
        required: true,
        unique: true
    }
})

module.exports = product