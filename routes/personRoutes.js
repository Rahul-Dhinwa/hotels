const express = require('express');
const router = express.Router();
const person = require('./../models/person');


router.post('/', async (req,res)=>{
    
    try{
        const data = req.body; //Assumig the request contains the person data

        //create a newPerson data using mongoose model

        const newPerson = new person( data );

        //Now save data
        const response = await newPerson.save();
        console.log('Person data is saved successfully');
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal server error has occupied');
    }

})



router.get('/', async (req,res)=>{
    try{
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal server error has occupied');
    }
})

//to get data of individual

router.get('//:workType', async (req, res)=>{
    const workType = req.params.workType; //Extract workType from prarmeter URL
    try{
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await person.find({work: workType});
            console.log('respose found');
            res.status(200).json(response);
        
        }else{
            res.status(404).json({error: 'Invalid workType'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({errer: 'Internal server error'})

    }

})




module.exports = router;