var express = require('express');
var router = express.Router();
var Expense = require('../models/expense.js');

router.get('/', function(req,res){
  console.log('Expense')
  Expense.find({})
    .exec(function(err,expenses){
      if (err){
        console.log(err);
      }
      res.json(expenses)
    });
});

router.post('/', function(req,res){
  var expense = new Expense({
    note: String,
    total: String,
    created_at: Date,
    updated_at: Date
  });
  expense.save();
  res.json(expense);
});



module.exports = router;
