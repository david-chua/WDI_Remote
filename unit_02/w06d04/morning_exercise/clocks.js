var calculate = function(hourhand, minutehand) {
<<<<<<< HEAD
  //convert hours to minutes so that we have a direct comparison between these two input values.
  // var hoursToMinutes = MINUTES + DRIFT;

  if (hourhand > 12 || hourhand < 0 || minutehand > 60 || minutehand < 0){
    return "out of range"
  }

  var hoursToMinute = (hourhand * 5) + (minutehand / 12);
  var minutes = minutehand;

  if(hoursToMinute > 60) {
    hoursToMinutes -= 60;}

//knowing 1 minute = 6 degrees, convert minutes into degrees
// var angle = (hoursToMinutes - minutes) * 6;
var angle;

if (hoursToMinute > minutes){
  angle = (hoursToMinute - minute) * 6;
} else {
  angle = (minutes - hoursToMinute) * 6;
}

return [angle, 360 - angle]


};

//   var minuteDeg = minutehand * 6;
//   var hourDeg = function(){
//     if (hourhand = 12)
//     return ((0 * hourhand) + (0.5* minutehand));
//     else ((hourhand * 30) + (0.5 * minutehand));
//   }
//  var firstdeg = minuteDeg - hourDeg;
//  var seconddeg = 360 - firstdeg;
// if (hourhand < 0)
//   if (hourhand > 12)
//  return [firstdeg, seconddeg];

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
