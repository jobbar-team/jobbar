var bodyParser = require('body-parser');
var path = require('path');
var employeeService = require(path.resolve('./src/main/nodejs/services/employeesService'));
var contractService = require(path.resolve('./src/main/nodejs/services/contractService'));


var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports= function(app){
    
    app.get('/contracts/get', function(req,res){
        contractService.getAll(req,res);
    });
    app.post('/contracts/contr', urlencodedParser, function(req,res){
        contractService.addContract(req,res);
    });
    app.get('/contracts', function(req,res){
        if(Object.keys(req.query).length !== 0 && req.query.constructor === Object){
            employeeService.getOneEmplByNameAndSurname(req,res);
        }else{
            employeeService.setAllEmpl(res);
        }
    });
    app.get('/contracts/contr/:id', function(req,res){
        contractService.getOne(req,res);
    });
    app.get('/employees/getone/:id', function(req,res){
        employeeService.getOne(req,res);
    });
}