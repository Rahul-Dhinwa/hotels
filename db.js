// For conectivity of database with mongodb

const mongoose = require('mongoose');
require('dotenv').config();

//define MongoDB coonnebtion URL

//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;


//set mongoDB connection
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect(mongoURL)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));


//Get the default connectiion
//Mongoose maintains a default connection Object representing the mongoDB connection.
const db = mongoose.connection;


//define event lisner for data base connection

db.on('connected', ()=>{
    console.log('connected to mongodb server');
});

db.on('error', (error) => { // 'error' parameter added here
    console.log('MongoDB connection error:', error);
});

db.on('disconnected', ()=>{
    console.log('mongooDB is now disconnected');
});

module.exports = db;