var express = require('express');
var router = express.Router();

// EVERY ROUTE IN THIS FILE IS PREFIXED WITH /todos
// BECAUSE OF LINE 15 IN server.js


//  verb, path    (callbak) req data res data
router.get('/', function(req, res) {
  console.log('HIT RES TODOS');
  res.send('hit/todos')
});

router.get('/:id', function(req,res){
  console.log('HIT/todos/:id');

  res.send(`hit/todos/${req.params.id}`)
});

router.get('/:id/edit', function(req,res){
  console.log('HIT/todos/:ide//edit');
  console.log(req.params);
  res.send(`todos/${req.params.id}/edit`)
});


module.exports = router;
