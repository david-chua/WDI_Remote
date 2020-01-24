//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.post('/', function(req,res){
	var newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	};

	pirates.push(newPirate);
	res.redirect('/pirates');
});


//==============================
// UPDATE
//==============================
router.get('/:id/edit', function(req,res){
	res.render('pirates/edit', {
		pirate: {
			name: pirates[req.params.id].name,
			birthplace: pirates[req.params.id].birthplace,
			death_year: pirates[req.params.id].death_year,
			base: pirates[req.params.id].base,
			nickname: pirates[req.params.id].nickname,
			id: req.params.id
	}
});
});

router.put('/:id', function(req,res){
	var PiratesToEdit = pirates[req.params.id];

	PiratesToEdit.name = req.body.name;
	PiratesToEdit.birthplace = req.body.birthplace;
	PiratesToEdit.death_year = req.body.death_year;
	PiratesToEdit.base = req.body.base;
	PiratesToEdit.nickname = req.body.nickname;

	res.redirect('/pirates');
});
//==============================
// DESTROY
//==============================
router.delete('/:id', function(req, res){
	pirates.splice(req.params.id, 1);

	res.redirect('/pirates/');
});
//==============================
// EXPORTS
//==============================

module.exports = router;
