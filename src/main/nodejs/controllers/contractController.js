var bodyParser = require('body-parser');
var path = require('path');
var contractService = require(path.resolve('./src/main/nodejs/services/contractService'));


var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports= function(app){
    app.get('/contracts', function(req,res){
        if(Object.keys(req.query).length !== 0 && req.query.constructor === Object){
            contractService.getOneEmpl(req,res);
        }else{
            contractService.getAllEmpl(res);
        }
    });
    app.post('/contracts', urlencodedParser, function(req,res){
        console.log(req.body);
        res.sendStatus(200);
    });
}