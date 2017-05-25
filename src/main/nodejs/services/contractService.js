var path = require('path');
var Contract = require(path.resolve('./src/main/nodejs/model/contract-model'));
var Employee = require(path.resolve('./src/main/nodejs/model/employee-model'));
var ObjectId = require('mongodb').ObjectID;

module.exports = {
    /*getAll: function(res){
        Contract.find({}, function(err,data){
            if(err) throw err;
            res.render('contracts',{contr:data});
        });
    },*/
    getAllEmpl: function(res){
        Employee.find({}, function(err,data){
            if(err) throw err;
            var nameList = [];
            data.forEach(function(element) {
                nameList.push(element.name + ' ' + element.surname);
            }, this);
            res.render('contracts',{names: nameList});
        });
    }
}
