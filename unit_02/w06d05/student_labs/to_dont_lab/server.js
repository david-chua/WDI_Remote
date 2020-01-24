//packages
var path = require('path');
var express = require('express');
var logger = require('morgan');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var todontControllers = require('./controllers/todont.js');

// app settings
var app = express();
var port = process.env.PORT ||3000;


//log
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));
app.use('/todont', todontControllers);

//Views
app.set('view engine', 'hbs');

app.get('/', function(req,res) {
  res.send('This is Our Home Page!!');
})

app.listen(port, function(){
  console.info('Server is Ready', port,"//", new Date());
});
