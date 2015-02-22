/**
* Created by Vadym on 24/01/15.
*/
// grab the mongoose module
var mongoose = require('mongoose');

// define model
module.exports = mongoose.model('Humidity', {
    value : { type : Number },
    date : { type: Date, default: Date.now }
});