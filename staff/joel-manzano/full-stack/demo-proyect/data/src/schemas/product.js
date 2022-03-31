/*
TODO implement me

properties
- brand (object id)
- model (string)
- cost (number)
- price (number)
- serial (string)
*/


const { Schema } = require('mongoose')
const { Types:  { ObjectId } } = Schema

const product = new Schema ({
    brand: {
        type: ObjectId,
        ref: 'Brand',
        required: true
    },

    model: {
        type: String,
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
    },

    //image: {
        //type: String,
        //required: true
    //}


})

module.exports = product