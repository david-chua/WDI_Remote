window.onload = function() {
//find all buttons
//returns an array
  var button =  document.querySelectorAll('button')

//make first button console log on click
  button[0].addEventListener('click', function(){console.log("You've clicked button one")})

  button[1].addEventListener('click',function() {
    //creates a new, empty, p tag
    var newP = document.createElement('p');
    //adds text to the p tag stored in teh var newP
    newP.textContent = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
    newP.setAttribute("id", "newP")
    var information = document.querySelector('.information')
    //add the p tag to the dom inside of the info div
  information.appendChild(newP);
  })

  button[2].addEventListener('click',function(){
    document.getElementById('newP').remove();
    })
}
