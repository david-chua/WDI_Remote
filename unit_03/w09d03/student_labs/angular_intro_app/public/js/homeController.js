angular.module('IntroToAngularApp')
  .controller('HomeController', HomeController);

function HomeController(){
  this.awesome = true;
  this.numbers= [4,8,15,16,23,42];
  this.movies = ["Tron", "Up", "The Man From Nowhere", "Divergent"];
  this.console = ["PS4", "PS3", "PS2", "XBox", "XBox One", "Wii U"];

};
