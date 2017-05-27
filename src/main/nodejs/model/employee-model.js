var mongoose = require('mongoose');
//Create a schema - blueprint
var employee = new mongoose.Schema({
    name: String,
    surname: String,
    position: String,
    birth: Date,
    contract: {
        contractNo: Number,
        type: String,
        sallary: Number,
        contractDate: Date,
        duration: Date
    }
});


    var Employee = mongoose.model('Employee', employee);

module.exports = Employee;