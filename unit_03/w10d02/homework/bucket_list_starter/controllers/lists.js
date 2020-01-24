var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

//localhost:3000/users/:id/list

router.post('/', function(req,res){
  console.log("Post Route Accessed!");
});
// router.get('/', function(req,res){
//   User.findById(req.params.id).exec()
//     .then(function(user){
//       res.json({lists: user.list});
//     })
//     .catch(function(err){
//       res.json(err)
//     })
//   })

module.exports = router;
