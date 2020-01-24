console.log("CONTROLLER");

angular
  .module("pinspiration_app")
  .controller("MainController", MainController);

MainController.$inject = ['$http', '$state'];

function MainController($http, $state){

  main = this;
  main.boards = [];
  main.pins = [];
  main.showBoard = showBoard;
  main.createBoard = createBoard;
  main.createPin = createPin;
  main.updatePin = updatePin;
  main.deletePin = deletePin;
  main.saved = false;

  // http request to rails API to get all boards
  $http.get(`http://localhost:3000/boards`)
    .then(function(response) {
      main.boards = response.data;
      console.log("BOARDS", main.boards);
  });

  //Board Show page with all its pins
  function showBoard(board){
    main.board = board;
    //make get request /boards/id/pins
    $http.get("http://localhost:3000/boards/" + board.id + "/pins")
      .then(function(response) {
        main.pins = response.data;
        console.log("Single Board:", main.pins);
        $state.go('boardShow', {boardId: board.id});
    });
  }


  function createBoard(){
    console.log("CREATING BOARD", main.newBoardTitle);
    // http request to rails API to post Board
    $http.post(`http://localhost:3000/boards/`, main.newBoardTitle)
      .then(function(response) {
        main.boards.push(response.data);
        main.newBoardTitle = {};
        console.log("BOARDS", main.boards);
    });
  }

  function createPin(board){
    console.log("CREATING PIN ON BOARD: ", board);

    // http request to rails API to post new pin
    $http.post(`http://localhost:3000/boards/${board.id}/pins`, main.newPin)
      .then(function(response) {
        main.pins.push(response.data);
        main.newPin = {};
        console.log("PINS", main.pins);
    });
  }

  //http request to rails API to delete pin
  function deletePin(board, pin, index){
    console.log("BOARD: ", board, " and PIN: ", pin, " and INDEX: ", index);
    $http.delete(`http://localhost:3000/boards/${board.id}/pins/${pin.id}`, pin)
     .then(function(response) {
       console.log("THE DELETE??", response.data);
       main.pins.splice(index, 1);
     });
  }

  //http request to rails API to Update the pin
  function updatePin(pin, index){
    console.log("PIN TO UPDATE : ", pin);

    var updatedPin = main.updatedPin;

    $http.put(`http://localhost:3000/boards/${main.board.id}/pins/${pin.id}`, updatedPin)
     .then(function(response) {
       console.log("Did it Update?", response.data);
       main.pins[index] = response.data;
       main.saved = true;
     });
  }

}
