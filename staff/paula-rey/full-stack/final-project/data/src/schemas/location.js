const { Schema } = require('mongoose')

const location = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },

    image: {
        type: String,
    },

    description: {
        type: String,
        required: true,
        maxLength: 300
    },

    adress: {
        type: String,
        required: true,
    },

    
})

module.exports = location


// coords: {
//     type: [integer, integer],
//     required: true,
//     unique: true
// }
