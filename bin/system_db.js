var async = require('async');
var mongoose = require('mongoose');
require(process.cwd()+'./../lib/connection');
var System = mongoose.model('System');


var data = {
  systems: [
    {
      "name": "이용현",
      "system": "Hi-OMS"
    },
    {
      "name": "윤희성",
      "system": "Hi-OMS"
    },
    {
      "name": "홍지연",
      "system": "구매"
    },
    {
      "name": "김인태",
      "system": "MIS"
    },
    {
      "name": "이수진",
      "system": "MIS"
    }
]};


var deleteSystem = function(callback){
    console.info('Deleting system');
    System.remove({}, function(error, response){
        if(error){
            console.error('Error deleting system : '+ error);
        }
        console.info('Done deleting system');
        callback();
    });
};

var addSystem = function(callback){
    console.info('Adding system');
    System.create(data.systems, function(error){
        if(error){
            console.error('Error: '+ error);
        }
        console.info('Done Adding system');
        callback();
    });
};



async.series([
    deleteSystem,
    addSystem

], function(error, results){
    if(error){
        console.error('Error: ' + error);
        mongoose.connection.close();
    }

    mongoose.connection.close();
    console.log('Done!');
});
