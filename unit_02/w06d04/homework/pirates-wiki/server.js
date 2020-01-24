var path = require('path');
var express = require('express');
var hbs = require('hbs');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var pirateControllers = require('./controllers/pirates.js');

//app settings
var app = express();
var port = process.env.PORT || 3000;


//log
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use( morgan('dev'));
app.use("/pirates", pirateControllers);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//Views?
app.set('view engine', 'hbs');


//HOME
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

app.listen(port, function(){
  console.info('Server Up, Listening to Port 3000');
})
