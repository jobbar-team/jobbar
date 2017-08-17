var express = require('express');


var controller = require('./src/main/nodejs/controllers/mainController');
var employeesController = require('./src/main/nodejs/controllers/employeesController');
var contractController = require('./src/main/nodejs/controllers/contractController');

//MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://nem:nem@mongodb-1-gltzc:27017/mongodb', {
  useMongoClient: true
});
mongoose.connection.once('open', function(){
    console.log('Connection has been made...');
}).on('error', function(error){
    console.log('Connection error: ' + error);
});

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/main/webapp/views');
app.use('/assets', express.static('./src/main/webapp/public/assets'));
app.use('/public/js', express.static(__dirname + '/src/main/webapp/public/js')); // redirect js file frontend
app.use('/images/',express.static(__dirname + '/src/main/webapp/images/'));// redirect to background img
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


app.get('/main', function(req, res){
    res.sendFile(__dirname + '/src/main/webapp/views/main.html');
});

app.listen(8080);
console.log('Listening port 8080');

controller(app);
employeesController(app);
contractController(app);