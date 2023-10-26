const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Client = require('./model/client');
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded())

app.listen(port, (err) => {
    if(err){
        console.log("error in running server", err)
    }
    console.log("server running")
})

app.get('/', (req, res) => {
    res.status(200).json({message: "hii"});
})

app.post('/sign-up', async (req, res) => {

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

app.post('/sign-in', async (req, res) => {
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
