console.log('tamagotchi file is loaded');

//your constructor function here
Tamagotchis = function(name, creatureType,foodInTummy, restedness, health){
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = foodInTummy;
  this.restedness = restedness;
  this.health = health;
  this.cry = function(){
    this.foodInTummy--;
    console.log(`{this.name} + "WAH!!!!`);
    console.log('food in tummy: '+ this.foodInTummy);
  };
  this.puke = function(){
    this.foodInTummy--;
    console.log('foodInTummy: ' + this.foodInTummy);
  };
  this.yawn = function(){
    this.restedness--;
    console.log(this.name + " has current restedness of: " + this.restedness);
  }
};

create new Tamagotchis
var Kenny = new Tamagotchis(Kenny, Humanoid, 10,10,10);
Var Pho = new Tamagotchis(Pho, NoodleMan, 10,10,10);

//test out your Tamagotchies below via console.logs
