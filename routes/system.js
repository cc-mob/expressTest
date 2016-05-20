var express = require('express');
var mongoose = require('mongoose');
var System = mongoose.model('System');
var router = express.Router();

router.get('/system',
    function(req,res,next){
        System.find().sort('name').exec(function(error, results)
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
