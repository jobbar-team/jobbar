var express = require('express');


var controller = require('./src/main/nodejs/controllers/mainController');
var employeesController = require('./src/main/nodejs/controllers/employeesController');

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
app.get('/about_us', function(req, res){
    res.sendFile(__dirname + '/src/main/webapp/views/about_us.html');
});

app.listen(3000);
console.log('Listening port 3000');

controller(app);
employeesController(app);