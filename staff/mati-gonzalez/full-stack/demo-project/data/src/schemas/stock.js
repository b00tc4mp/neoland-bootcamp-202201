/*
TODO implement me

properties
- product (object id)
- color (color)
- size (object)
- quantity (number)
*/

const { schemas } = require('mongoose')
const { schema } = require('../models/CreditCard')
const { Types: { ObjectId }} = schema

const stock = new schema({
    product: {
        type: ObjectId,
        ref: 'Prodcut',
        required: true
    },

    color: {
        type: String,
        required: true
    },

    size: {
        type: Object,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = stock