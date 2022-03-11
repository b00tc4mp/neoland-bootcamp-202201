const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


const answer = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },

    question: {
        type: ObjectId,
        ref: 'Question',
        required: true,
    },

    text: {
        type: String,
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    likes: {
        type: Number
    }
})

module.exports = answer