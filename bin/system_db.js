var async = require('async');
var mongoose = require('mongoose');
require(process.cwd()+'./../lib/connection');
<<<<<<< HEAD
var System = mongoose.model('System');
=======
var Sys = mongoose.model('Sys');
>>>>>>> expressTest/master


var data = {
  systems: [
    {
<<<<<<< HEAD
      "name": "이용현",
      "system": "Hi-OMS"
    },
    {
      "name": "윤희성",
      "system": "Hi-OMS"
=======
      "name": "윤희성",
      "system": "오엠에스"
    },
    {
      "name": "김인태",
      "system": "엠아이에스"
>>>>>>> expressTest/master
    },
    {
      "name": "홍지연",
      "system": "구매"
    },
    {
<<<<<<< HEAD
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
=======
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
>>>>>>> expressTest/master
        callback();
    });
};

<<<<<<< HEAD
var addSystem = function(callback){
    console.info('Adding system');
    System.create(data.systems, function(error){
        if(error){
            console.error('Error: '+ error);
        }
        console.info('Done Adding system');
=======
var addSys = function(callback){
    console.info('Adding systems');
    Sys.create(data.systems, function(error){
        if(error){
            console.error('Error: '+ error);
        }
        console.info('Done Adding systems');
>>>>>>> expressTest/master
        callback();
    });
};



async.series([
<<<<<<< HEAD
    deleteSystem,
    addSystem
=======
    deleteSys,
    addSys
>>>>>>> expressTest/master

], function(error, results){
    if(error){
        console.error('Error: ' + error);
        mongoose.connection.close();
    }

    mongoose.connection.close();
    console.log('Done!');
});
