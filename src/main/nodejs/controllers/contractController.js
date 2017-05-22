var bodyParser = require('body-parser');
var path = require('path');
var employees = require(path.resolve('./src/main/nodejs/controllers/employeesController'));
var contractService = require(path.resolve('./src/main/nodejs/services/contractService'));


var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports= function(app){
    app.get('/contracts', function(req,res){
        contractService.getAll(res);
    });
}