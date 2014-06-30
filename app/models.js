var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var Product = new Schema({
    name: { type: String },
    image: { type: String },
    description: { type: String },
    value: { type: Number },
    height: { type: Number },
    width: { type: Number },
    length: { type: Number },
    weight: { type: Number }
});

module.exports = {
    Product: mongoose.model('Product', Product)
};
