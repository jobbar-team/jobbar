var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nemanja:root@ds133231.mlab.com:33231/jobbar');



//Create a schema - blueprint
var employee = new mongoose.Schema({
    name: String,
    surname: String,
    position: String,
    birth: Date,
    contract: {
        contractNo: Number,
        type: String,
        sallary: Number,
        contractDate: Date
    }
});

//Create a model
var Employee = mongoose.model('Employee', employee);

module.exports = {
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
                contract: null
            };
            
            console.log(saved);
            console.log(JSON.stringify(saved));
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
            var saved = {
                _id: data._doc._id,
                name: data._doc.name,
                surname: data._doc.surname,
                position: data._doc.position,
                birth: data._doc.birth,
                contract: null
            };
            
            console.log(saved);
            console.log(JSON.stringify(saved));
            res.json(saved);
        });
    }
};
