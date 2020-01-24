var express = require('express');
var router = express.Router();
var Movie = require('../models/movie.js');

//your routes here
router.get('/', function(req,res){
  console.log("Let's Get This Route!")
  Movie.find({}).exec(function(err, movies){
    if (err) {console.log(err);}
    console.log(movies)
    res.json({movies})
  });
})

module.exports = router;
