var express = require('express');


var controller = require('./controllers/mainController');
var employeesController = require('./controllers/employeesController');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('./public/assets'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


app.listen(3000);
console.log('Listening port 3000');

controller(app);
employeesController(app);