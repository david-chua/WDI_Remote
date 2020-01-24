angular.module('theMET')
  .controller('GeneralInfoController', GeneralInfoController);

function GeneralInfoController(){
  this.Hours= ["Sunday: 10:00am - 5:30pm","Monday: 10:00am - 5:30pm", "Tuesday: 10:00am - 5:30pm", "Wednesday: 10:00am - 5:30pm", "Thursday: 10:00am-5:30pm", "Friday: 10:00am - 9:00pm", "Saturday: 10:00a - 9:00pm"];
  this.Admission = ["Adults - $25", "Seniors - $17", "Students - $12"];
};
