angular.module('theMET')
  .controller('ExhibitController', ExhibitController);

function ExhibitController(){
  this.image_url = "http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988";
  this.title = "Sargent Portraits of Artists & Friends";
  this.artist = "By John Sargent"
};
