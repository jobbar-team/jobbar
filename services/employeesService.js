var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
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
                data.date = JSON.stringify(data.birth).substring(1,11);
            res.render('empl',{empl: data});
        });
    },
    save: function(req,res){
        Employee.findByIdAndUpdate(ObjectId(req.params.id), req.body , function(err,data){
            if(err) throw err;
            res.json(data);
        });
    }
};

/*function convert (d){
                var parts = d.split(" ");
                var months = {Jan: "01",Feb: "02",Mar: "03",Apr: "04",May: "05",Jun: "06",Jul: "07",Aug: "08",Sep: "09",Oct: "10",Nov: "11",Dec: "12"};
            return parts[3]+"-"+months[parts[1]]+"-"+parts[2];
        }*/
/*function parseD(date){
    //date ----->  Sat Feb 02 2013 01:00:00 GMT+0100 (CET) --> YYYY-MM-DD
    //console.log(JSON.stringify(date));
    var d = JSON.stringify(date).substring(1,11);
    console.log('d: ' + d);
    //console.log(d);
    var year = date.substring(11,15);
    var day = date.substring(8,10);
    var m = date.substring(4,7);
    switch(m){
        case 'Jan':
            m = '01';
            break;
        case 'Feb':
            m = '02';
            break;
        case 'Mar':
            m = '03';
            break;
        case 'Apr':
            m = '04';
            break;
        case 'Maj':
            m = '05';
            break;
        case 'Jun':
            m = '06';
            break;
        case 'Jul':
            m = '07';
            break;
        case 'Aug':
            m = '08';
            break;
        case 'Sep':
            m = '09';
            break;
        case 'Okt':
            m = '10';
            break;
        case 'Nov':
            m = '11';
            break;
        case 'Dec':
            m = '12';
            break;
            default:
            console.log('Make a mistake!');
    }
    var d = year + '-' + m + '-' + day;
    return d;};*/
