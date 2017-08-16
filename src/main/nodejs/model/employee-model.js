var mongoose = require('mongoose');
var path = require('path');
var schema = mongoose.Schema;
//var contract = require(path.resolve('./src/main/nodejs/model/contract-model'))
//Create a schema - blueprint
var contract = new mongoose.Schema({
    contractNo: Number,
    type: String,
    sallary: Number,
    duration: Number
});



var employee = new mongoose.Schema({
    name: String,
    surname: String,
    position: String,
    birth: Date,
    contractDate: Date,
    contract: {
        type: schema.Types.ObjectId, ref: 'Contract'
    }
});


var Contract = mongoose.model('Contract', contract);
var Employee = mongoose.model('Employee', employee);


//module.exports = Contract;


    

module.exports = {
    empl: Employee,
    contr: Contract
}