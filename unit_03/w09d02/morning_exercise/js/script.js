$(function() {
	console.log("I work");
	$('#start').click(start)
	$('#stop').click(stop)
	$('#reset').click(reset)
	$('#countdown').click(countdown)
});


var start = function(event){
console.log('hi');

}

var stop = function(event){
	console.log('hello');
}
var reset = function(event){
	console.log('hi there')
}

var countdown = function(event){
	console.log('boo')
}
