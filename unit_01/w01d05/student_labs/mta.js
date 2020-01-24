var test = {
  hello: function(name) {
    console.log("Hi!, I'm " + name)
  }
}

// Examine the output of process.argv in the terminal $`node mta.js hello`.
console.log("I'm terminal args >>> \n", process.argv)

var mta = {

    data: {
      "N": ["Times_Square", "34th", "28th", "23rd", "Union_Square", "8th"],
      "L": ["8th", "6th", "Union_Square", "3rd", "1st"],
      "6": ["Grand_Central", "33rd", "28th", "23rd", "Union_Square", "Astor_Place"]
    },

    lines: function() {
      var lines = Object.keys(this.data);
      console.log("Lines:", lines);
      return lines;
      }

    stop
    }


// There are four elements in the logged array:

// [ '/usr/local/Cellar/node/7.1.0/bin/node',
//  '/Users/colinhart/ga/classes/matey/wdi-remote-matey/unit_01/w01d05/student_labs/mta.js',
//  'hello',

// The first element is the version of node we're using and where it's saved.
// The second element is the path to the file we're running
// the third is the second argument we passed. First arg was mta.js second was a string hello

// We can then use the string hello process.argv[2] to call the function hello in the test object
// If we pass a third argument to node, like a name, we can pass that as an argument to the hello function
// $`node mta.js hello Colin`

// Execute/Invoke the hello function in test using args passed from the terminal
//test[process.argv[2]](process.argv[3])


switch(process.argv[2]) {
  case undefined:
    console.log('please provide a command');
    break;
  case 'lines':
      mta[process.argv[2]]()
    break;
  case 'stops':
      mta[process.argv[2]](process.argv[3])
    break;
  // case:
  //
  //   break;
  // case:
  //
  //   break;





}
