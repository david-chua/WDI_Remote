// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const GameEngine = {
  var Player_One = "X";
  board: Array(9).fill(null),
    /// e.g. ["X", "O", "X", null, null, null, null, null, null]
  resetGame: function(){
    document.getElementByID('board').innerHTML="";
  }
},
  currentPlayer: "X",
  gameOver: false,

  toggleCurrentPlayer: function(){
    If (Player_One === "X"){
      document.getElementById('data-position').innerHTML="X";
      else {
        document.getElementById('data-position').innerHTML="O";
      }
    }


  },
  isValidMove: function(position){
    checkForVictory ===  'false';
    If (document.getElementById('data-position').innerHTML === "X"||"O")
      return "true";
      Else return "false";
    }
  },
  checkForVictory: function(){
    //horizontal
    // 0-1-2
    // 3-4-5
    // 6-7-8


    //vertical
    //0-3-6
    //1-4-7
    // 2-5-8

    //diagnoal
    //0-4-8
    //2-4-6
  },
  makeMove: function(position){
    // Your Code Here
  }
};

// UI //
const ViewEngine = {
  refreshBoardView: function(boardState){
    GameEngine.resetGame();

  },
  flashMessage: function(msg){
    // Your Code Here
  },
  clearFlash: function(){
    // Your Code Here
  }
};

// Top-Level Application Control //
const GameController = {
  onClickNewGame: function(event){
      ViewEngine.refreshBoardView
  },
  onClickBoardSpace: function(event){
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-game').onclick = AppController.onClickNewGame;

};
