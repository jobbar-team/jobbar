/*var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nemanja:root@ds133231.mlab.com:33231/jobbar');
*/


//Create a schema - blueprint
/*var contract = new mongoose.Schema({
    contractNo: Number,
    type: String,
    sallary: Number,
    contractDate: Date
});*/

//Create a model
/*var Contract = mongoose.model('Contract', contract);*/

var path = require('path');
var Contract = require(path.resolve('./src/main/nodejs/model/contract-model'));
var ObjectId = require('mongodb').ObjectID;

module.exports = {
    getAll: function(res){
        Contract.find({}, function(err,data){
            if(err) throw err;
            res.render('contracts',{contr:data});
        });
    }
}
