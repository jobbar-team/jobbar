var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){
    app.get('/', function(req,res){
        res.sendFile('/home/nemanja/Documents/projects/jobbar/index.html');
    });
};