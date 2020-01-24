var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.get('/', function(req, res) {
  User.find({})
  .exec(function(err, users){
    if (err) { console.log(err); }
<<<<<<< HEAD
    res.render('users/index.hbs', {
      users: users,
    currentUser: req.session.currentUser })
=======
    res.render('users/index.hbs', { users: users });
>>>>>>> 4a0d53c8d540c17bf59a6d7b8409e8b2aee15db0
  });
});

router.get('/signup', function(req, res){
  res.render('users/signup.hbs');
});

router.post('/signup', function(req, res){
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if (err) console.log(err);

    console.log(user);
    res.redirect('/users');
  });
});

router.get('/signup', function(req, res){
  res.render('users/signup.hbs')
});

router.get('/:id', authHelpers.authorize, function(req, res) {
  console.log(req.session);
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    // res.render('user/show.hbs', { user: user } );
    res.render('users/show.hbs', { user: user } );
  });
<<<<<<< HEAD
})


=======
});
>>>>>>> 4a0d53c8d540c17bf59a6d7b8409e8b2aee15db0


router.post('/', authHelpers.createSecure, function(req, res){
var user = new User({
  email: req.body.email,
  password_digest: res.hashedPassword
});

user.save(function(err, user){
  if (err) console.log(err);
  console.log(user);
  res.redirect('/users/')
});
});

module.exports = router;
