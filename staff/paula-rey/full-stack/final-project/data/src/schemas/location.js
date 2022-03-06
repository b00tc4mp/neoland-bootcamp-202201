const { Schema } = require('mongoose')

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

    
})

module.exports = location


// coords: {
//     type: [integer, integer],
//     required:true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
// }