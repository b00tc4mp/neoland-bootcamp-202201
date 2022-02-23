//TODO implement me

//properties
//- product (object id)
//- color (color)
//- size (object)
//- quantity (number)

const { Schema } = require ('mongoose')
const { Types: { ObjectId } } = Schema


const stock = new Schema ({
    product: [{
        type: ObjectId,
        required: true
    }],

    color: {
        type: color,
        required: true
    },

    size: {
        type: ObjectId,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = stock