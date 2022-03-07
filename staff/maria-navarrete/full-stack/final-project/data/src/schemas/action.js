const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const action = new Schema({
    description: {
        type: String,
        required: true,
    },

    public: {
        type: Boolean,
        required: true,
        default: false,
    },

    reqTime: {
        type: Number,
        required: true,
    },

    reqBudget: {
        type: Number,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    } 
})

module.exports = action