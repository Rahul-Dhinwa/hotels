const mongoose = require('mongoose');

//Define person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age:{
        type: Number
    },
    work: {
        type: String,
        required: true,
        enum: ['chef', 'waiter', 'manager']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create person module 

const person = mongoose.model('person', personSchema);
module.exports = person;