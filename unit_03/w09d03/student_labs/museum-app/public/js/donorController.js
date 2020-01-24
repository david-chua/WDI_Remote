angular.module('theMET')
  .controller('DonorController', DonorController);

function DonorController(){
  this.contact = ["donation@metromuseum.org", "+212-650 2425"];
  this.DonationAmount = ["$50", "$100", "250", "500", "1000", "5000"];

};
