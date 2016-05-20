var async = require('async');
var mongoose = require('mongoose');
require(process.cwd()+'./../lib/connection');
var System = mongoose.model('System');


var data = {
  systems: [
    {
      "name": "이수진ㅎ",
      "system": "MIS"
    },
    {
      "name": "윤희성ㅎ",
      "system": "HI-OMS"
    },
       {
      "name": "김인태ㅎ",
      "system": "MIS"
    },
       {
      "name": "이용현ㅎ",
      "system": "HI-OMS"
    },
       {
      "name": "홍지연ㅎ",
      "system": "구매"
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
