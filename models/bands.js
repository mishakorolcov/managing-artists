let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BandsSchema = new Schema({
    name: String,
    number: Number,

});

let BandsModel = mongoose.model('bands', BandsSchema);
module.exports = BandsModel;
