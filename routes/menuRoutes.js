const express = require('express');
const router = express.Router();
const menu = require('../models/menu');


// Post menu data

router.post('/', async (req, res)=>{

    try {
        const data = req.body;
        const newMenu = new menu(data);

        const response = await newMenu.save();
        console.log('Menu data have saved');
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal server error has occupied');
    }
})

// Get menu data

router.get('/', async (req, res)=>{
    try{
        const data = await menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal server error has occupied');
    }
})

module.exports = router;