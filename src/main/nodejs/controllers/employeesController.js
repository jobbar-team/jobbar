var bodyParser = require('body-parser');
var path = require('path');
var emplService = require(path.resolve('./src/main/nodejs/services/employeesService'));

/*var itemOne = Employee({name: 'Nemanja',surname: 'Sokic', position: 'Engineer', birth: "1989-06-07", sallary: 75})
    .save(function(err){
        if(err) throw err;
        console.log('item saved');
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    app.use(bodyParser.json({ type: 'application/*+json' }));
    
    app.get('/employees', function(req,res){
        emplService.getAll(res);
    });
    app.post('/employees/empl', urlencodedParser, function(req,res){
            emplService.create(req,res);
    });
    app.get('/employees/empl', function(req,res){
        res.render('empl',{empl: {}});
    });
    app.delete('/employees/delete/:id', function(req,res){
        emplService.remove(req,res);
    });
    app.get('/employees/empl/:id', function(req,res){
        emplService.edit(req,res);
    });
    app.put('/employees/update/:id', urlencodedParser, function(req,res){
            emplService.save(req,res);
    });
    
};