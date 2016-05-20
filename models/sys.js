var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SysSchema = new Schema({


    name:{
        type : String
    },
    system:{
        type : String
    }


});

module.exports = mongoose.model('Sys', SysSchema);
