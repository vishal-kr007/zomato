const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        unique: true
    }
},
{
    timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;