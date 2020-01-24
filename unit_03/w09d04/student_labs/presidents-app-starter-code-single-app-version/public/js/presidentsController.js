angular.module('ThePresidentsApp', [])
  .controller('PresidentsController',
  PresidentsController);

  PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var self = this;
  self.all= [];
  self.addPresident = addPresident;
  self.newPresident = {};

  function getPresidents(){
    $http
      .get('/presidents')
      .then(function(response){
        self.all = response.data.presidents;
      });
  }
  getPresidents();

  function addPresident(){
    $http
    .post('/presidents', self.newPresident)
    .then(function(response){
      getPresidents();
    // self.all.push(self.newPresident);
    self.newPresident = {};
  });
};

self.delPresident = delPresident;

function delPresident(president) {
  $http
  .delete(`/presidents/${president._id}`)
  .then(function(response){
    getPresidents();
  });
}
}
