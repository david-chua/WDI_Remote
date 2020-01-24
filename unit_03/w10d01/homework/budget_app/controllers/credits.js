var express = require('express');
var router = express.Router();
var Credit = require('../models/credit.js');

router.get('/', function(req,res){
  console.log('here')
  Credit.find({})
    .exec(function(err,credits){
      if (err){
        console.log(err);
      }
      res.json(credits)
    });
});

router.post('/', function(req,res){
  var credit = new Credit({
    note: req.body.note,
    total: req.body.total,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at
  });
  expense.save();
  res.json(credit);
});





module.exports = router
