var express = require('express');
var router = express.Router();
var Quote = require('../models/quote.js');

router.post('/', function(req, res) {
    var quote = new Quote({
        name: req.body.quote
    });
    quote.save();
    res.json(quote);
});

router.get('/', function(req, res) {
    Quote.find({})
        .exec(function(err, quotes) {
            if (err) {
                console.log(err);
            }
            res.json(quotes)

        })
})

router.put('/:id', function(req, res) {
    Quote.findByIdAndUpdate(req.body._id, {
            name: req.body.name
        })
        .exec(function(err, quote) {
            if (err) {
                console.log(err);
            }
            res.json(quote);
        })
})

router.delete('/:id', function(req, res) {
    Quote.findByIdAndRemove(req.params.id)
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
