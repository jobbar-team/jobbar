var mongoose = require('mongoose');

mongoose.connect('mongodb://nemanja:root@ds133231.mlab.com:33231/jobbar');



//Create a schema - blueprint
var employee = new mongoose.Schema({
    name: String,
    surname: String,
    position: String,
    birth: Date,
    sallary: Number
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
        if (!req.body) return res.sendStatus(400);
        var newEmpl = Employee(req.body).save(function(err,data){
            if(err) throw err;
            res.redirect("/employees");
            
        });
    }
};
