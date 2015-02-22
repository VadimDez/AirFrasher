/**
 * Created by Vadym on 24/01/2015.
 */
//// grab the mongoose module
//var mongoose = require('mongoose');
//
//// define model
//var TemperatureSchema = new mongoose.Schema({
//    value : { type : Number },
//    date : { type: Date, default: Date.now },
//    sensor: {type: String }
//});
//
//TemperatureSchema.index({ sensor: 1, type: -1});
//
//module.exports = mongoose.model('Temperature', TemperatureSchema);

// grab the mongoose module
var mongoose = require('mongoose');

// define model
module.exports = mongoose.model('Temperature', {
    value : { type : Number },
    name : { type: String },
    date : { type: Date, default: Date.now }
});