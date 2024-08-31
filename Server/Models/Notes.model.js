const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    // userId : {
    //     type : String,
    //     ref : 'User',
    //     required : true
    // },
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    tags : {
        type : [String],
        default : []
    },
    isPinned : {
        type : Boolean,
        default : false
    },
    userId : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : new Date().getTime()
    }
});

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = {NotesModel};