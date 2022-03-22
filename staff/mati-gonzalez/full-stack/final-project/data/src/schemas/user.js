const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema


const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
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

    favQuestions: [{
        type: ObjectId,
        ref: 'Question'
    }],

    // prestigePoint: {
    //     type: Number,
    // }
})

module.exports = user