angular.module('pinspiration_app')
  .controller('boardController', boardController);


  function boardController($http){

    var self = this;
    var server = "http://localhost:3000"
    self.boards = [];


    $http.get(`${server}/boards`)
      .then(function(response){
        console.log(response.data);
        return self.boards = response.data;

      })

      function addBoard(){
        $http.post(`${server}/boards`, self.newBoard)
        .then(function(response) {
          console.log(response);
          self.boards.push(response.data);
          self.newBoard = {};
        });
      };

  self.addBoard = addBoard;
  };


  function pinController($http){
    console.log('here');

    function showPins(){
      
    }
  };
