var mongoose = require('mongoose');
var dbUrl = 'mongodb://203.235.210.94:27017/ext1';

mongoose.connect(dbUrl);

// Ctrl+C를 누르면 몽구스 연결 종료
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection disconnected');
        process.exit(0);

    });
});

require('../models/employee');
require('../models/team');
require('../models/dish');
require('../models/oms');
require('../models/sys');
