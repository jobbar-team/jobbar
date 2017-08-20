var path = require('path');
//var Contract = require(path.resolve('./src/main/nodejs/model/contract-model'));
var model = require(path.resolve('./src/main/nodejs/model/employee-model'));
var ObjectId = require('mongodb').ObjectID;
var Employee = model.empl;
var Contract = model.contr;
module.exports = {
    /*getAll: function(res){
        Contract.find({}, function(err,data){
            if(err) throw err;
            res.render('contracts',{contr:data});
        });
    },*/
    addContract: function(req,res){
        if (req.body == null || Object.keys(req.body).length === 0){
            return res.sendStatus(400);
        }
        //First we need to add new contract to db
        Contract(req.body).save(function(err,data){
            if(err) throw err;
            res.sendStatus(200);
        });
    },
    getAll: function(req,res){
        Contract.find({}, function(err,data){
            if(err) throw err;
            res.send(data);
        });
    },
    getOne: function(req,res){
        Contract.findById(ObjectId(req.params.id),function(err,data){
            if(err) throw err;
            res.send(data);
        });
    }
}
