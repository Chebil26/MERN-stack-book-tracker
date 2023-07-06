const mongoose = require('mongoose')

const Schema = mongoose.Schema

const advSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year_published: {
        type: Number,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Adv', advSchema)

