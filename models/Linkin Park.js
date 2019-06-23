let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LinkinSchema = new Schema({
    name: String,
    surname: String,
    group: String,
    age: Number,

});

let LinkinModel = mongoose.model('Linkin', LinkinSchema);
module.exports = LinkinModel;
