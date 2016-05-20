var async = require('async');
var mongoose = require('mongoose');
require(process.cwd()+'./../lib/connection');
var Sys = mongoose.model('Sys');


var data = {
  systems: [
    {
      "name": "윤희성",
      "system": "오엠에스"
    },
    {
      "name": "김인태",
      "system": "엠아이에스"
    },
    {
      "name": "홍지연",
      "system": "구매"
    },
    {
      "name": "임지수",
      "system": "없음"
    }
]};


var deleteSys = function(callback){
    console.info('Deleting systems');
    Sys.remove({}, function(error, response){
        if(error){
            console.error('Error deleting systems : '+ error);
        }
        console.info('Done deleting systems');
        callback();
    });
};

var addSys = function(callback){
    console.info('Adding systems');
    Sys.create(data.systems, function(error){
        if(error){
            console.error('Error: '+ error);
        }
        console.info('Done Adding systems');
        callback();
    });
};



async.series([
    deleteSys,
    addSys

], function(error, results){
    if(error){
        console.error('Error: ' + error);
        mongoose.connection.close();
    }

    mongoose.connection.close();
    console.log('Done!');
});
