const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const location = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 50
    },

    description: {
        type: String,
        required: true,
        minlength: 300
    },

    adress: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    coords: {
        type: [integer, integer],
        required:true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }

})

module.exports = location