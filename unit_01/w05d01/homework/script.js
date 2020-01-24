console.log("I work");

$(document).ready(function(){
  $("#title").click(function(){
    $("#title").css("color", "pink");
  })
});

$(document).ready(function(){
  $(".business").hover(
    function(){
      $(this).css("border", "0.6em solid black");
    }, function(){
      $(this).css("border", "0.6em solid #ADA7B0");
    }
)}
);
