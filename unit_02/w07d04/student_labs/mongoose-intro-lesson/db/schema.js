var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

//Uses ES6 native promises. We're specifying a Promise library to avoid a depreciation warning
mongoose.Promise = global.Promise;


// Now that we're connected, we're saving connection to a variable.
var db = mongoose.connection;


//log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

//log the message if connection is succssful
db.once('open', function(){
  console.log("database has been connected!");
});

//disconects from database
db.close();


var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  title: String,
  unit: String,
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);


// var chuck = new StudentModel({name: "Chuck", age: 30});

// chuck.save(function(err, student){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(student);
//   }
// });

// StudentModel.create({ name: "Max", age: 29}, function(err, student){
//   if (err){
//     console.log(err);
//   } else {
//     console.log(student);
//   }
// });

// Create a ProjectModel

// var anna = new StudentModel({name: "Anna", age: 30});
// var project1 = new ProjectModel({title: "memory game", unit: "JS"});
//
// anna.projects.push(project1);
//
// anna.save(function(err, student){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(student + " was saved to our db!");
//   }
// });


module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
