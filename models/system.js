var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SystemSchema = new Schema({


    name:{
        type : String
    },
    system:{
        type : String
    }


});

module.exports = mongoose.model('System', SystemSchema);
