const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


const location = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: true,
        maxLength: 50
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
    }
})

module.exports = location


