// For conectivity of database with mongodb

const mongoose = require('mongoose');

//define MongoDB coonnebtion URL

const mongoURL = 'mongodb://localhost:27017/hotels'

//set mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connectiion
//Mongoose maintains a default connection Object representing the mongoDB connection.

const db = mongoose.connection;

//define event lisner for data base connection

db.on('connected', ()=>{
    console.log('connected to mongodb server');
});

db.on('error', ()=>{
    console.log('mongodb connection error: ', error);
});

db.on('disconnected', ()=>{
    console.log('mongooDB is now disconnected');
});

module.exports = db;