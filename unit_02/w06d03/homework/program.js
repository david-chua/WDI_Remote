var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req,res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data){
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})


//What's in a Query
// app.get('/search', function(req, res){
//   var query = req.query
//   res.send(query)
// })


//Param Pam Pam
// app.put('/message/:id', function(req,res){
//   var id = req.params.id;
//   var str = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(str)
// })

//Stylish CSS
// var stylus = require('stylus');
//
//
// app.use(require('stylus').middleware(process.argv[3]))
// app.use(express.static(process.argv[3]))



//Good Old Form
// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extended: false}));
//
// app.post('/form', function(req, res){
//   res.send(req.body.str.split('').reverse().join(''))
// });

//JADE
// app.set('view engine','jade');
// app.set('views', process.argv[3]);
// app.get('/home', function(req, res){
//   res.render('index', {date: new Date().toDateString()})
// })
//Hello World
// app.get('/home', function(req, res) {
//   res.send('Hello World!')
// })
//
//Static
// app.use(express.static(process.argv[3]));


app.listen(process.argv[2]);
