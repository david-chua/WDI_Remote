//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');


//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', authHelpers.createSecure, function(req, res){
  var list = new List({
    name: req.body.name,
    completed: req.body.completed
  });

list.save(function(err, list){
  if (err) console.log(err);
  console.log(list);
  console.log(req.session.currentUser);
  res.redirect('/users/:id/lists')
})
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/edit', function(req, res){
  res.render('lists/edit.hbs');
});

//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:id', function(req, res){
  List.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    completed: req.body.completed
  }, {new: true})
  .exec(function(err, list){
    if (err) {console.log(err);}
    console.log(list);
    res.send(list);
  });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item
router.delete('/:id/lists/:id', function(req, res){
  List.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, list){
    if (err) console.log(err);
    res.send(list + "Item Deleted");
  });
});

//======================
// EXPORTS
//======================
module.exports = router;
