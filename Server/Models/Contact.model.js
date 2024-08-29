const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
});

const ContactModel = mongoose.model('contact',ContactSchema);

module.exports = {ContactModel};