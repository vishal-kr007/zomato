const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded());

app.use('/', require('./Router'))

app.listen(port, (err) => {
    if(err){
        console.log("error in running server", err)
    }
    console.log("server running")
})

app.get('/', (req, res) => {
    res.status(200).json({message: "hii"});
})


