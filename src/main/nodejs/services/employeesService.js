var path = require('path');
var model = require(path.resolve('./src/main/nodejs/model/employee-model'));
var ObjectId = require('mongodb').ObjectID;

var Employee = model.empl;
module.exports = {
    getOne: function(req,res){
        Employee.findById(ObjectId(req.params.id),function(err,data){
            if(err) throw err;
            res.send(data);
        });
    },
    getAll: function(res){
        Employee.find({}, function(err,data){
            if(err) throw err;
            res.render('employees',{empl: data});
        });
    },
    create: function(req,res){
        if (req.body == null || Object.keys(req.body).length === 0){
            return res.sendStatus(400);
        } 
        Employee(req.body).save(function(err,data){
            if(err) throw err;
            var saved = {
                _id: data._doc._id,
                name: data._doc.name,
                surname: data._doc.surname,
                position: data._doc.position,
                birth: data._doc.birth,
                contract:null
            };
            res.json(saved);
        });
    },
    remove: function(req,res){
        Employee.findByIdAndRemove(ObjectId(req.params.id),function(err,data){
            if(err) throw err;
            res.json(data);
        });
    },
    edit: function(req,res){
        Employee.findById(ObjectId(req.params.id),function(err,data){
            if(err) throw err;
            res.render('empl',{empl: data});
        });
    },
    save: function(req,res){
        Employee.findByIdAndUpdate(ObjectId(req.params.id), req.body , function(err,data){
            if(err) throw err;
            var saved = req.body;
            res.json(saved);
        });
    },
    setAllEmpl: function(res){
        Employee.find({}, function(err,data){
            if(err) throw err;
            var nameList = [];
            data.forEach(function(element) {
                nameList.push(element.name + ' ' + element.surname);
            }, this);
            res.render('contracts',{name: nameList});
        });
    },
    getOneEmplByNameAndSurname: function(req,res){
        Employee.find({name: req.query.name, surname: req.query.surname}).
            populate('contract').
                exec( function(err,data){
            if(err) throw err;
            if(data.length !== 0){
                res.send(data);
            }else{
                res.sendStatus(404);
            }
        });
    }
};
