//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var methodOverride = require('method-override');


//***************************
// MIDDLEWARE
//***************************
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// for View engine
app.set('view engine', 'hbs');
app.set('views', './views');


//***************************
// CONTROLLERS
//***************************
app.get('/', function(req,res){
  res.send("Do you want to be the very best?");
})
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);


//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(3000, function(req,res){
  console.log("Pikaaa Chuuuuuu");
});
