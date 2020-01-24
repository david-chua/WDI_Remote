var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.get('/login', function(req, res) {
<<<<<<< HEAD
  res.render('users/login.hbs')
})

router.post('/login', authHelpers.loginUser, function(req, res){
// eval(pry.it)
console.log(req.session)
res.redirect('/users/')
});

router.delete('/', function(req, res){
req.session.destroy(function(){
  res.redirect('/users');
});
})
=======
});

router.post('/login', authHelpers.loginUser, function(req, res){

});

router.delete('/', function(req, res){

});
>>>>>>> 4a0d53c8d540c17bf59a6d7b8409e8b2aee15db0

module.exports = router;
