const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
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
    },
    username: {
        required: true,
        type: String
    },
    password: { // Changed from "passport" to "password"
        required: true,
        type: String
    }
});

personSchema.pre('save', async function(next){
    const person = this;

    //Hast rhe passwort onlt when it is modified or it is new
    if(!person.isModified('password')) return next();

    try{
        //hash passwort generation
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        //overwrite the palin password with the hased password
        person.password = hashedPassword;

        next();
    }catch(err){

        return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        //Use bcrypt to compare the provided password to hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch
    }
    catch(err){
        throw err;
    }
}

/*
    HOW COMPARE FUNCTION WORKS    

    password --------> vinvjnalljvjunvjskvindionfskjf
    login -------> password


    vinvjnalljvjunvjskvindionfskjf --------> extract salt
    salt+password --------> kjnvkjnadlkvkjnvklvjhbvas

    ```` here compare function extracts the salt from hashed password and then 
        salt is mix with password and a new hashed password is made this hassed
        password is compared with old hashed password.


*/



// Create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
