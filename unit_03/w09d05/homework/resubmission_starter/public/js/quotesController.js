console.log("Quotes Controller Works!")
angular.module('myApp')
  .controller('quotesController', quotesController);

  quotesController.$inject = ['$http'];

//Your QUOTES CONTROLLER HERE!
function quotesController($http){
  var self = this;
  self.newQuotes = [];
  self.savedQuotes = [];

  self.getQuote = getQuote;

  function getQuote(){
    $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(function(res){
      //.get sends request to the api to bring get a quote.
      //res.data shows quote and length, which i'm guessing is the amount of lines or amount of quotes.
      self.newQuotes.push(res.data[0]);
    })
  }

self.saveQuote = saveQuote;

  function saveQuote(quote){
    console.log('saving this quote');
    $http
      .post('/quotes', {
        quote: quote
    })
      .then(function(res){
        console.log("saved");
      });
  }

self.getSaved = getSaved;

  function getSaved(){
    $http
      .get('/quotes')
      .then(function(res) {
        console.log(res.data)
          self.savedQuotes = res.data;
      })
  }


}
