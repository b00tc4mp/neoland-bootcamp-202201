const { Schema } = require('mongoose')
const product = require('./product')


const purchase = new Schema({

    product: {product},
    quantity: {
        type: Number,
        required: true
    }

})

module.exports = purchase