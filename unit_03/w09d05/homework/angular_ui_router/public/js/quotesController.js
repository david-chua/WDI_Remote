angular.module('myApp')
    .controller('quotesController', quotesController);

quotesController.$inject = ['$http'];

function quotesController($http) {
    var self = this;
    self.tempQuotes = [];
    self.savedQuotes = [];
    self.msg = "";

    self.getQuote = getQuote;

    function getQuote() {
        $http
            .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(function(res) {
                self.tempQuotes.push(res.data[0]);
            })
    }

    self.saveQuote = saveQuote;

    function saveQuote(quote) {
        $http
            .post('/quotes', {
                quote: quote
            })
            .then(function(res) {
                self.msg = "Quote successfully saved";
            });
    }

    self.getSaved = getSaved;

    function getSaved() {
        $http
            .get('/quotes')
            .then(function(res) {
                self.savedQuotes = res.data;
            })
    }

    self.updateQuote = updateQuote;

    function updateQuote(quote) {
        $http
            .put(`/quotes/${quote._id}`, quote)
            .then(function(res) {
                quote.showEdit = false;
                self.msg = "Changes saved"
            })
    }

    self.deleteQuote = deleteQuote;

    function deleteQuote(quote, index) {
        $http
            .delete(`/quotes/${quote._id}`)
            .then(function(res) {
                self.savedQuotes.splice(index, 1);
                self.msg = "Successfully deleted"
            })
    }
}
