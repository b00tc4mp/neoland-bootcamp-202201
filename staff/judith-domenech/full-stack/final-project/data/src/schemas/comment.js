const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = comment