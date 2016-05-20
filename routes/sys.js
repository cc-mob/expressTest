var express = require('express');
var mongoose = require('mongoose');
var Sys = mongoose.model('Sys');
var router = express.Router();

router.get('/sys',
    function(req,res,next){
        Sys.find().sort('name').exec(function(error, results)
            {
                if(error) {
                    return next(error);
                }
                // 유효한 데이터로 응답한다.
                res.json(results);
            }
        );
    }
);


module.exports = router;
