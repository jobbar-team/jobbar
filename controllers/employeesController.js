var bodyParser = require('body-parser');
var emplService = require('/home/nemanja/Documents/projects/jobbar/services/employeesService');

/*var itemOne = Employee({name: 'Nemanja',surname: 'Sokic', position: 'Engineer', birth: "1989-06-07", sallary: 75})
    .save(function(err){
        if(err) throw err;
        console.log('item saved');
});*/


module.exports = function(app){
    app.get('/employees', function(req,res){
            data = emplService.getAll();
            res.render('employees',{empl: data});
    });
};