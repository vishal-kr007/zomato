const express = require('express');
const Client = require('../model/client');
const router = express.Router();

router.post('/signup', async (req, res) => {

    let client = new Client();

    client.name = req.body.name;
    client.email = req.body.email;
    client.password = req.body.password;

    const doc = await client.save();

    if(client){
        res.status(200).json({message: "clien created sucessfully", client})
    }else{
        res.status(500).json({message: "Error Occured!"})
    }
});

router.post('/signin', async (req, res) => {
    try{
        const client = await Client.findOne({email: req.body.email});
    
        if(client){
            if(client.password === req.body.password){
                res.status(200).json({message: "clien login sucessfully", client})
            }
            res.status(200).json({message: "User Unavialable"})
        }else{
            res.status(401).json({message: "User Unavialable"})
        }
    }catch(error){
        res.status(500).json({message: "Server Error"})
    }
});

module.exports = router;