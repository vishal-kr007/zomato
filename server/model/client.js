const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true, // Ensure the email field is required
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});


const Client = mongoose.model('Client', clientSchema);
module.exports = Client;