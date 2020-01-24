var express = require('express');
var router = express.Router();
var pirates = require('../models/pirates.js');



//Show All Pirates
router.get('/', function(req,res){

  res.render('piratelist/index', {
    pirate: pirates.listed
  });
});
//New Pirate
router.get('/new', function(req,res){
  res.render('piratelist/new')
});

router.post('/', function(req,res){
    var NewPirate = {
      name: req.body.name,
      urgent: req.body.birthplace,
      death_year: req.body.death_year,
      base: req.body.base,
      nickname: req.body.nickname
    };

    pirates.listed.push(NewPirate);
    res.redirect('/pirates');
  });


//Show Pirate by ID
router.get('/:id', function(req,res){
  var piratenum = pirates.listed[req.params.id];
  res.render('piratelist/show',{
    piratenum: piratenum
  });
});




// res.render('pirates/index', {
  //  name: req.body.name,
  //  birthplace: req.body.birthplace,
  //  death_year: req.body.death_year,
  //  base: req.body.base,
  //  nickname: req.body.nickname
  // });
 // });














//exports;
module.exports = router;
