let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LinkinParkSchema = new Schema({
    name: String,
    surname: String,
    group: String,
    age: Number,

});


module.exports = mongoose.model('LinkinPark', LinkinParkSchema);
