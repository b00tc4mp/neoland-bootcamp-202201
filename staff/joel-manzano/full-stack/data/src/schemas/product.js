//TODO implement me

const { Schema } = require('mongoose')
const { types:  { objectId } } = Schema

const product = new Schema ({
    brand: {
        type: objectId,
        ref: 'Brand'
       
    },

    model: {
        type: String,
        year: Number,
        edition: String,
        required: true
    },

    cost: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        require: true
    },

    serial: {
        type: String,
        require: true,
        unique: true
    }


})

module.exports = product