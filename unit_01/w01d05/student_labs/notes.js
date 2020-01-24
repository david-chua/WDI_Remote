// Person {
//   Age:[25],
//   Name: ['David']
//   sayHello: function(Name) {
//     console.log('Hello '+ Name)
//   }
// };
//
// person.sayHello(Name);

// the keyword this is 'self referential'
var person = {
  age: 25,
  name: 'Mike Curry',
  helloMyNameIs: function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this)
  }
  hello: function(name){
    console.log(`Hello ${name}`);
    this.myNameIs();
  }
  myNameIs: function(){
    console.log(`My name is ${this.name}`);
  }
}
