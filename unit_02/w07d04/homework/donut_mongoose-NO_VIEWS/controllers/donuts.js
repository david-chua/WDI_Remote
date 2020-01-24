//======================
// REQUIREMENTS
//======================
var express = require("express");
var router = express.Router();
// var mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/donut_mongoose-NO_VIEWS');
var Donut = require("../models/donuts.js");

mongoose.Promise = global.Promise;
//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', function(req, res){
  Donut.find({})
    .exec(function(err, donuts){
      if(err) {console.log(err);}
      console.log(donuts);
      res.render('donuts/index.hbs', donuts);
    });
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', function(req,res){
  console.log(req.params.id)
  User.findById(req.params.id)
  .exec(function(err, donuts) {
    if (err) console.log(err);
    console.log(user);
    res.render('donuts/show.hbs', donuts);
  });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;
