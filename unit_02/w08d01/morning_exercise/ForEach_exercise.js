//   words = ["A", "flock", "of", "crows", "is", "known", "as", "a", "murder"];
//   Upper = function(x){
//     return x.toUpperCase();
//   };
//
// words.map(Upper);

// var doubleMe = [-1, 0, 5, 20, 43, 235];
// var double = doubleMe.map(function(num){
//   return num *2
// });
// double;

var numbers = [2, 5, 7, 9, 33, 25, 66, 70];
var  even = numbers.map(function(n){
  for (var i = 0; i < numbers.length; i++){
  if (n % 2 === 0){
    return ("true");
  } else {
    return ("false");
  }
  }
});

even;

OR

var numbers = [2, 5, 7, 9, 33, 25, 66, 70];
var answer = numbers.map(function(num)new Promise(function(resolve, reject) {
  return num % 2 === 0
});)
console.log(answer)

var character = [
  { name: 'Mario',  hatColor: 'red', health: 30},
  { name: 'Luigi',  hatColor: 'green', health: 25},
  { name: 'Toad',   hatColor: 'mushroom', health: 25},
  { name: 'Wario', hatColor: 'yellow', health: 30 },
  { name: 'Yoshi',  hatColor: null, health: 35}
];

var answer = character.map(function(element)){
  return element.name;
};

var answer2 = character.map(function(element)){
  return element.hatColor;
};

var character = [
  { name: 'Mario',  hatColor: 'red', health: 30},
  { name: 'Luigi',  hatColor: 'green', health: 25},
  { name: 'Toad',   hatColor: 'mushroom', health: 25},
  { name: 'Wario', hatColor: 'yellow', health: 30 },
  { name: 'Yoshi',  hatColor: null, health: 35}
];

var answer = character.map(function(obj){
  return obj.attack = obj.health/2
})

var answers = character.map(function(obj){
  return obj.name[2].toUpperCase();
})
