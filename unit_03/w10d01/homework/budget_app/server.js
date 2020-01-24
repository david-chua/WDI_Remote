var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/budget-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var creditsController = require('./controllers/credits.js');
app.use('/credits', creditsController);

var expensesController = require('./controllers/expenses.js');
app.use('/expenses', expensesController);


app.listen(3000, function(){
  console.log("Save! Save! Save! and Spend a little!")
})
