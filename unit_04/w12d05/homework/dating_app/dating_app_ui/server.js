var express = require('express')
var app = express();


app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

port = 4000

app.listen(port, function(){
  console.log("Mix it and match it now live!")
})
