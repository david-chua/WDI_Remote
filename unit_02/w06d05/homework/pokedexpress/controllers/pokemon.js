//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:

// Set express Router to a variable called router:

// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)

// Require the poke_array.js file here from models.
// Save it to a variable called data:

var express = require('express');
var router = express.Router();
var pokemon = require('../models/poke_array.js');



//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req, res){
  res.render("pokemon/index.hbs", {
    pokemon: pokemon
  });
});

// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index


// Make a GET route '/new' that will simply render a form to create a new Pokemon

router.get('/new', function(req, res){
  res.render("pokemon/new.hbs");
});

// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/:id', function(req,res){
  var showPokemon = pokemon[req.params.id];

  res.render('pokemon/show.hbs', {
    pokemon: showPokemon
  });
});

//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post('/', function(req, res){
  var newPokemon = {
    Id: req.body.id,
    Name: req.body.name,
    Image: req.body.img,
    Type: req.body.type,
    Stats: req.body.stats,
    Moves: req.body.moves,
    Damages: req.body.damages,
    Miscellaneous: req.body.misc
  };

  pokemon.push(newPokemon);
  res.redirect('/pokemon');
});

//***************************
// UPDATE
//***************************
router.get('/:id/edit', function(req,res){
  res.render('pokemon/edit', {
    pokemon: {
      ID: pokemon[req.params.id].id.id,
      Name: pokemon[req.params.id].name,
      Image: pokemon[req.params.id].img,
      Type: pokemon[req.params.id].type,
      Stats: pokemon[req.params.id].stats,
      Moves: pokemon[req.params.id].moves,
      Damages: pokemon[req.params.id].damages,
      Miscellaneous: pokemon[req.params.id].misc,
      id: req.params.id
    }
  });
});

router.put('/:id', function(req,res){
  var EditPokemon = pokemon[req.params.id];

  EditPokemon.id  = req.body.id;
  EditPokemon.name= req.body.name;
  EditPokemon.img = req.body.img;
  EditPokemon.type= req.body.type;
  EditPokemon.stats= req.body.stats;
  EditPokemon.moves = req.body.moves;
  EditPokemon.damages = req.body.damages;
  EditPokemon.misc = req.body.misc;

  res.redirect('/pokemon');
});

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.
router.delete('/:id', function(req,res){
  pokemon.splice(req.params.id,1);

  res.redirect('/pokemon/');
});
//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;
