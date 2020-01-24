//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require("hbs");
var logger = require('morgan');
var app = express();


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use( logger('dev'));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(methodOverride("_method"));

app.use(express.static('public'));


//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
var donutsController = require('./controllers/donuts.js');
app.use('/donuts', donutsController);

//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/donut_store');


var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function(){
  console.log("database has been connected!");
});

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
app.listen(3000, function(){
  console.log("Donut be alarmed, app is listening to port 3000!");
});
