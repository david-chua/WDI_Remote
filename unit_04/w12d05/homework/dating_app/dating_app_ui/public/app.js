angular
  .module("dating_app", [])
  .controller("MainController", MainController);


function MainController($http, $scope){
  console.log('Main here');
 var self = this;
 self.users = [];


  function getUsers(){
    $http.get('http://localhost:3000/users')
      .then(function(response){
        console.log(response.data);
        self.users = response.data;
      });
  };

  function addUser(){
    console.log("let me add one")
    $http.post('http://localhost:3000/users', self.newUser)
      .then(function(response){
        self.users.push(response.data);
        self.newUser = {};
      });
  };

  function userEdit(){
    console.log("edit me")
    $http.put('http://localhost:3000/users/${user.id}', user)
      
  };

  function userPop(user){
    var FindThisUser = user;
    console.log(FindThisUser.id);



    self.user = self.users.find(function(user){
      return user === FindThisUser;
    });
  };


  getUsers();

  self.userEdit = userEdit;
  self.getUsers = getUsers;
  self.addUser = addUser;
  self.userPop = userPop;
};
