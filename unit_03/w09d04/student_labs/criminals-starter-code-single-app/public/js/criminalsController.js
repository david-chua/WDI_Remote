angular
.module('InfamousCriminals')
.controller('InfamousCriminalsController', InfamousCriminalsController);

InfamousCriminalsController.$inject = ['$http'];

function InfamousCriminalsController($http){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;
  console.log('hi');

  getCriminals();

  function getCriminals(){
    $http
    .get('/criminals')
    .then(function(response){
      self.all = response.data.criminals;
    });
  }

  function addCriminal(){
    $http
    .post('/criminals', self.newCriminal)
    .then(function(response){
      getCriminals();
    });
    self.newCriminal = {};
  }

  function deleteCriminal(criminal){
    $http
    .delete("/criminals/" + criminal._id)
    .then(function(response){
      getCriminals();
    });
  }

};
