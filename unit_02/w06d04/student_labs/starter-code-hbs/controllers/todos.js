var express = require('express');
var router = express.Router();
var data = require('../data.js');

/* INDEX TODOS */
router.get('/', function(req,res) {


  res.render('todos/index', {
    todos: data.seededTodos,
    num: data.seededTodos.length
  });
});


// New Todo
router.get('/new', function(req, res){
  res.render('todos/new')
});

router.post('/', function(req,res){
  var NewTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };

  data.seededTodos.push(NewTodo);
  res.redirect('/todos');
  // console.log(req.body);
  // res.send(req.body);
});


router.get('/:id', function(req,res){
  var todo = data.seededTodos[req.params.id];

  res.render('todos/show', {
    todo: todo
  });
  // res.render('todos/show', {
  //   name: data.seededTodos[req.params.name]['description'],
  //   urgent: data.seededTodos[req.params.name]['urgent']
  // });
});




module.exports = router;
