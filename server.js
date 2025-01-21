const express = require('express');
const app = express();
app.use(express.json()); // Add this middleware here
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const passport = require('./auth');

// Middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next(); //next() to next function
}

app.use(logRequest);
app.use(passport.initialize());
const localAuthMiddle = passport.authenticate('local', {session: false}) ;

app.get('/' , function(req, res) {
    res.send('Hello... Express server has created')
})

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/person'  ,  personRoutes);
app.use('/menu' , localAuthMiddle, menuRoutes);

app.listen(PORT, ()=>{
    console.log('Server is lising on port 3000')
});