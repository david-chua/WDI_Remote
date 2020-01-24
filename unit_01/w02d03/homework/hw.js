// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE

  advanceTenMillisecs: function() {
    Millisecs: function() {
  // It increases the number of milliseconds by ten.
     millisecs +10;
  // If the number of milliseconds reaches 1000
  // a.  it resets the number of milliseconds to zero
     if (millisecs === 1000) {
       millisecs === 0;
  //  b.  it increments the number of seconds.
      secs === secs + 1;}
      else {
        secs === secs; }
  // If the number of seconds reaches 60,
      if (secs === 60) {
  // it resets the number of seconds to zero.
        secs === 0;
        mins === mins + 1;}
  // b.  it increments the number of minutes.
      else {
        mins === mins; }
      if (mins === 60){
        millisecs === 0;
        secs === 0;
        mins === 0;
      }
    }
  },
  reset: function(){

// 1.  It resets the counts of minutes, seconds, and milliseconds to zero.
    Stopwatch.mins = 0;
    Stopwatch.secs = 0;
    Stopwatch.millisecs = 0;
  }

// 2.  It resets the list of laps to be empty.

  start: function(){
// 1.  If the stopwatch is not running,
// a. it sets the state of the stopwatch to 'running'.
// b. it calls `advanceTheClock` in order to start the ticking of the clock.
// 2.  If the stopwatch is running,
// a. it does nothing.
  },
  stop: function(){
    Stopwatch.isRunning = false;
    this.tickClock();
    // Your Code Here
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    var update = document.querySelector('#time-display');
    var min = document.querySelector('#mins');
    var sec = document.querySelector('#secs');
    var millisec = document.querySelector('#milli');

    min.innerHTML = ViewHelpers.zeroFill(mins, 2);
    sec.innerHTML= ViewHelpers.zeroFill(secs, 2);
    milli.innerHTML= ViewHelpers.zeroFill(millisecs, 3);



// 1.  It displays the values of minutes, seconds, and (tens of)
//     milliseconds elapsed in the DOM element with id `time-display`, in
//     the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
//     `00:00:00`.
// 2.  It pads the values of minutes, seconds, and (tens of) milliseconds
//     with zeros so that the strings are at least two characters long.
  },
  updateLapListDisplay: function(laps){
// 1.  It displays the recorded laps inside the `lap-list` element,
//     representing each lap with an `<li>` element that displays the
//     lap's `mins`, `secs`, and `millisecs` values (zero-padded to be at
//     least two characters long, just like `time-display`).
  },
};
const ViewHelpers = {
  zeroFill: function(num, length){
    var n = num.toString();
    var l = num.str.length;
    if (n < l) {
    return ('0' + n);
    } (n);
  }
},
};


/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay();
  },
  handleClickStart: function() {
    Stopwatch.start();
  },
  handleClickStopReset: function(){
    If (Stopwatch.isRunning){
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
    }
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('START').addEventListener('click',function(event){AppController.handleClickStart();
  });
  document.getElementById('STOP').addEventListener('click',function(event){AppController.handleClickStopReset();
  });
  document.getElementById('LAP').addEventListener('click',function(event){AppController.handleClickLap();
  });
};
