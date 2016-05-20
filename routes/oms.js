var express = require('express');
var mongoose = require('mongoose');
var Oms = mongoose.model('Oms');
var router = express.Router();

router.get('/oms',
    function(req,res,next){
        Oms.find().sort('name').exec(function(error, results)
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
