var express = require('express');
var app = express();
var port = 3000;
var hbs = require("hbs");

app.set("viewe engine", "hbs");
app.set('views', './views');


app.get('/', function(req, res, next){
  console.log(req.query);
  res.render("index.hbs")
  });

app.get('/topping/:type', function(req, res, next){
  res.render("toppings.hbs", {message: req.params.type});
})

app.get('/order/:amount/:size', function(req, res,next){
  res.render("order.hbs", {
    amount: req.params.amount,
    size: req.params.size});
})

app.get('/:somevalue', function(req,res,next){
  res.render("error.hbs");
});

// app.get('/', function(req,res){
//   res.send("Welcome to Pizza Express!");
// })
//
// app.get('/topping/:type', function(req,res,next){
//   res.send( ` ${req.params.type} pizza! Good choice.`)
// });
//
// app.get('/order/:amount/:size', function(req, res, next) {
//   res.send( ` Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`)
// })

app.listen(port, function(){
  console.log("==========================");
  console.log("LISTENING ON PORT " + port);
  console.log("==========================");
});
