var express = require('express');
var router = express.Router();
var Netflix = require('../models/netflix.js');

router.post('/', function(req, res) {
    var movie = new Netflix({
        title: req.body.show_title,
        poster: req.body.poster
    });
    movie.save();
    res.json(movie);
});

router.get('/', function(req, res) {
    Netflix.find({})
        .exec(function(err, movies) {
            if (err) {
                console.log(err);
            }
            res.json(movies)
        })
})

router.delete('/:id', function(req, res) {
    Netflix.findByIdAndRemove(req.params.id)
        .exec(function(err) {
            if (err) {
                console.log(err);
            }
            res.json({
                success: 'success'
            })
        })
})

module.exports = router;
