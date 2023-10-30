const express = require('express');
const Customer = require('../model/customer');
const router = express.Router();

router.post('/signup', async (req, res) => {

    let customer = new Customer();

    customer.name = req.body.name;
    console.log(customer.name)
    customer.email = req.body.email;
    console.log(customer.email)
    customer.password = req.body.password;
    console.log(customer.password)

    const doc = await customer.save();

    if(customer){
        res.status(200).json({message: "customer created sucessfully", customer})
    }else{
        res.status(500).json({message: "Error Occured!"})
    }
});

router.post('/signin', async (req, res) => {
    try{
        const customer = await Customer.findOne({email: req.body.email});
    
        if(customer){
            if(customer.password === req.body.password){
                res.status(200).json({message: "customer login sucessfully", customer})
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