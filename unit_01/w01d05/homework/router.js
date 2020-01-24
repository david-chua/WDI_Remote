// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var dataStore = require('./data-store-stub');

var route = function(inputArgs){

//
  var TodoList = function (Name, dueDate, priority) {
    this.TaskName = Name;
    this.Date = dueDate;
    this.prioritylevel = priority;
  };

Object.defineProperty(TodoList, 'New Task', {
  get: function() {
    return this.TaskName + '' + this.Date + '' + this.prioritylevel;
  },
    });



module.exports = {
  route: route
}
