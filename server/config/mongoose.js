const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/Food_App');

const db = mongoose.connection;

db.once('open', (err) => {
    if(err){
        console.log("error in database connection", err)
    }
    console.log("Database Connected Sucessfully");
})

module.exports = db;