var bodyParser = require('body-parser');
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){
    app.get('/', function(req,res){
        res.sendFile(path.resolve('index.html'));
    });
};