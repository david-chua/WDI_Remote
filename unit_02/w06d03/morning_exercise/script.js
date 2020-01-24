//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
<<<<<<< HEAD
  var smallprice = 60;
  var smalltotal = smallprice * small;
  var largetotal = total - smalltotal;
  var largeprice = largetotal/ large;
return largeprice;
=======
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
>>>>>>> 70b916efa56f7b027b4c695ca5c61811bac900f8
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var circumference = 24901;
  var gallonsused = circumference/milesPerGallon;
  var cost = gallonsused * fuelPrice;
  return cost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  pureCostco = a * (b/100);
  pureKirkland = c * (d/100);
  puretotal = pureCostco + pureKirkland;
  totalJuice = a + c;
  purefruit = puretotal / totalJuice;
  return purefruit;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
