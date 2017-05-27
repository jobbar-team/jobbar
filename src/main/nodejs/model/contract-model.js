var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

//Create a schema - blueprint
var contract = new mongoose.Schema({
    contractNo: Number,
    type: String,
    sallary: Number,
    contractDate: Date,
    duration: Date
});

//Create a model
var Contract = mongoose.model('Contract', contract);
module.exports = Contract;