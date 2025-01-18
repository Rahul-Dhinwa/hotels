const express = require('express');
const app = express();
app.use(express.json()); // Add this middleware here
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Hello... Express server has created')
})

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);


app.listen(PORT, ()=>{
    console.log('Server is lising on port 3000')
});
