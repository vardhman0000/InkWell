const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    // userId : {
    //     type : String,
    //     ref : 'User',
    //     required : true
    // },
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