var express = require('express');
var app = express();

//라우트 1
app.get('/teams/:teamName/employees/:emoloyeeId',
        function(req, res, next)
        {
            console.log('teamName = ' +req.params.teamName);
            console.log('emoloyeeId = ' +req.params.emoloyeeId);
            res.send('path one');
        }
);

//라우트 2
app.get('/teams/:teamName/employees',
        function(req, res, next)
        {
            console.log('setting content type');
            res.set('Content-Type', 'application/json');
            res.locals.data = 100;
            next();
        },
        function(req, res, next)
        {
            console.log('teamName = ' +req.params.teamName);
            console.log(res.locals.data);
            res.send('path two');
        }
);

//라우트 3
app.get(/^\/groups\/(\w+)\/(\d+)$/,
        function(req, res, next)
        {
            console.log('groupname = ' + req.params[0]);
            console.log('groupId = ' + req.params[1]);
            res.send('path threee');
        }
);


var server = app.listen(1337,
        function(){
            console.log('server started on port 1337');

        }
);
