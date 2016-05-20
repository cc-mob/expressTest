var express = require('express');
var mongoose = require('mongoose');
var Dish = mongoose.model('Dish');
var router = express.Router();

router.get('/dishes',
    function(req,res,next){
        Dish.find().sort('id').exec(function(error, results)
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

router.get('/dishes/:dishId',

    function(req,res,next){
        Dish.findOne({
            id:req.params.dishId
        },function(error, results){
            if(error){
                return next(error);
            }
            // 유효한 데이터로 응답한다.
            res.json(results);
            }
        );
    }
);

module.exports = router;
