//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create your donut schema:
var DonutSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});

DonutSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if (!this.created_at ){
    this.created_at = now;
  }
  next();
});

var DonutModel = mongoose.model("Donuts",DonutSchema);


//export your donut with module.exports()
module.exports = {
  Donuts: DonutModel,
};
