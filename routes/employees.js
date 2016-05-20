var express = require('express');
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
//var Team = mongoose.model('Team');
var router = express.Router();

// 모든 임직원리스트를 가져온다.
router.get('/employees',
    function(req,res,next){
        Employee.find().sort('name.last').exec(function(error, results)
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

// employeeId 임직원을 가져온다.
router.get('/employees/:employeeId',

    function(req,res,next){
        Employee.findOne({
            id:req.params.employeeId
        }).exec(function(error, results){
            if(error){
                return next(error);
            }
            // 유효한 사용자를 찾지 못하면 0을 전송한다.
            if(!results){
                res.json({result: 0});
            }else{
                // 유효한 데이터로 응답한다.
                res.json(results);
            }

        });
    }
);

// employeeId 임직원 정보를 업데이트 한다.
router.put('/employees/:employeeId',
    function(req,res,next){
    //delete req.body._id;
    //req.body.team = req.body.team._id;

    Employee.update({
        id:req.params.employeeId
    }, req.body, function(err, output, numberAffected, response){
        if(err){
            res.json(output);
            return next(err);
        }
        //res.json({result: 1});
        res.json(output);
    });
});

// 임직원 정보를 추가한다.
router.post('/employees',
    function(req,res,next){

    var employee = new Employee();

    employee.id = req.body.id;
    employee.name.first = req.body.first;
    employee.name.last = req.body.last;

    employee.save(function(err){
        if(err){
            res.json({result: 0});
            return next(err);
        }
        res.json({result: 1});
    });
});

// 임직원 정보를 삭제한다.
router.delete('/employees/:employeeId',
    function(req,res,next){

    Employee.remove({id:req.params.employeeId}, function(err, output){
        if(err){
            res.json(output);
            return next(err);
        }
        res.json(output);
    });
});


module.exports = router;
