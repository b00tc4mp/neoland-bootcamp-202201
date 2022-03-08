const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    favorite:{
        type: ObjectId,
        require: false
    }
})

module.exports = user