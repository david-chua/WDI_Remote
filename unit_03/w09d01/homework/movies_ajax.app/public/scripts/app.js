$(function(){
  $('.search').click(function(event){
    getTitle();
  })
  $('.saveMovie').click(function(event){
    saveMovie();
  })
})


var getTitle = function(){
  var movieTitle = $('input[name=title]').eq(0).val();
  $.get("http://www.omdbapi.com/?t="+ movieTitle)
  .done(function(data){
    console.log(data)
    console.log(data.Title)
    $('.movie-container').append('<ul>');
    $('.movie-container').append('<img>');
    $('.movie-container > img').attr('src', data.Poster);
    $('.movie-container').append('<li>')
    $('.movie-container').append('<li>')
    $('.movie-container').append('<li>')
    $('.movie-container > li:eq(0)').append(data.Title)
    $('.movie-container > li:eq(1)').append(data.Year)
    $('.movie-container > li:eq(2)').append(data.Plot)
  })
}

var saveMovie = function(){
  console.log('Hi')
}
