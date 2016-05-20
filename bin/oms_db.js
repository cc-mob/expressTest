var async = require('async');
var mongoose = require('mongoose');
require(process.cwd()+'./../lib/connection');
var Oms = mongoose.model('Oms');


var data = {
  omses: [
    {
      "name": "LEEYONGHYUN",
      "eno": "05578"
    },
    {
      "name": "YOONHEESUNG",
      "eno": "08451"
    }

]};


var deleteOms = function(callback){
    console.info('Deleting oms');
    Oms.remove({}, function(error, response){
        if(error){
            console.error('Error deleting oms : '+ error);
        }
        console.info('Done deleting oms');
        callback();
    });
};

var addOms = function(callback){
    console.info('Adding oms');
    Oms.create(data.omses, function(error){
        if(error){
            console.error('Error: '+ error);
        }
        console.info('Done Adding oms');
        callback();
    });
};



async.series([
    deleteOms,
    addOms

], function(error, results){
    if(error){
        console.error('Error: ' + error);
        mongoose.connection.close();
    }

    mongoose.connection.close();
    console.log('Done!');
});
