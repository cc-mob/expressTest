var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OmsSchema = new Schema({


    name:{
        type : String
    },
    eno:{
        type : String
    }


});

module.exports = mongoose.model('Oms', OmsSchema);
