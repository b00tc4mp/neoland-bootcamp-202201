const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


const user = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    favQuestions: {
        type: [ObjectId]
    },

    prestigePoint: {
        type: Number,
    }
})

module.exports = user