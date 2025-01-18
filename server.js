// function add(a,b) {
//     return a+b;
// }

// var result = add(3,9);
// console.log(result);


// var add = function(a, b) {
//     return a+b;
// }

// var result = add(3,3);
// console.log(result);



// var add = (a, b) => {return a+b}

// var result = add(33453,365);
// console.log(result);


/* call back function */


/*
function callback() {
    console.log('Rahul is calling the function callback and done successfully completed');
}

const add = function(a,b, callback) {
    var result = a+b;
    console.log('Result: '+result);//main function work complete
    callback();// now calling callback function
}

add(123,123, callback);
*/

/*
const add = function(a,b, callback) {
    var result = a+b;
    console.log('Result: '+result);//main function work complete
    callback();// now calling callback function
}

add(2,3, function(){
    console.log('called back successfully');
})



var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'Hi' + user.username + '!\n', () =>{console.log('this file is created')});

*/







const express = require('express');
const app = express();

app.use(express.json()); // Add this middleware here
const db = require('./db');


app.get('/', function(req, res) {
    res.send('Hello... Express server has created')
})

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(3000, ()=>{
    console.log('Server is lising on port 3000')
});
