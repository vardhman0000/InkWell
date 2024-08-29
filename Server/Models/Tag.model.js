const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    }
});

const TagModel = mongoose.model('tag', TagSchema);

module.exports = {TagModel};