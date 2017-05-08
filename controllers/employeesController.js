var bodyParser = require('body-parser');
var path = require('path');
var emplService = require(path.resolve('./services/employeesService'));

/*var itemOne = Employee({name: 'Nemanja',surname: 'Sokic', position: 'Engineer', birth: "1989-06-07", sallary: 75})
    .save(function(err){
        if(err) throw err;
        console.log('item saved');
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    app.get('/employees', function(req,res){
            console.log('I received a GET request!');
            emplService.getAll(res);
    });
    app.post('/employees/newEmpl', urlencodedParser, function(req,res){
            emplService.create(req,res);
    });
    app.get('/employees/newEmpl', function(req,res){
            res.render('newEmpl');
    });
    app.delete('/employees/delete/:id', function(req,res){
             emplService.remove(req,res);
    });
};