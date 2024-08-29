const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    userId : {
        type : String,
        ref : 'User',
        required : true
    },
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    tag : [{
        type : String,
        }]
});

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = {NotesModel};