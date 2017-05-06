var bodyParser = require('body-parser');
var path = require('path');
var emplService = require(path.resolve('./services/employeesService'));

/*var itemOne = Employee({name: 'Nemanja',surname: 'Sokic', position: 'Engineer', birth: "1989-06-07", sallary: 75})
    .save(function(err){
        if(err) throw err;
        console.log('item saved');
});*/


module.exports = function(app){
    app.get('/employees', function(req,res){
            console.log('I received a GET request!');
            var data = emplService.getAll(res);
            console.log(data);
            
    });
};