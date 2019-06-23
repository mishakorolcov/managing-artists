let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArtistsSchema = new Schema({
    name: String,
    surname: String,
    group: String,
    age: Number,

});

let ArtistsModel = mongoose.model('artists', ArtistsSchema);
module.exports = ArtistsModel;
