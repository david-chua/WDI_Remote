var express        = require('express');
var logger         = require('morgan');

var app = express();

app.use(express.static('public'))

app.use(logger('dev'));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
  });

app.listen(process.env.PORT || 4000, function() {
  console.log(`listening on 4000`)
});
