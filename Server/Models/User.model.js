const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
        // unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : new Date().getTime()
    }
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = {UserModel};