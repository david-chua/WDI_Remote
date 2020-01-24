var express = require('express');
var router = express.Router();
var data = ('../data.js');


//Show All
router.get('/', function(req,res) {
  res.render('dont/index', {
    todonts: data.seededToDonts
  });
});






module.exports = router;
