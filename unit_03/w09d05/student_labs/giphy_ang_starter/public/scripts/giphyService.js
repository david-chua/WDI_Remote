angular.module('giphyAngularApp')
  .service('$GiphyService', GiphyService);


GiphyService.$inject = ['$http'];

function GiphyService($http){
  console.log('GiphyService ready for action');

  this.getGif = function(){
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
    .then(function(giphyResponse){
      return giphyResponse.data.data.image_url;
    });
  };
  // 
  // this.saveGif = function(obj){
  //   return $http.post('/gifs',obj )
  //   .then(function(giphyResponse){
  //     console.log(giphyResponse.data.data);
  //     return giphyResponse.data.data;
  //   });
  // };
}
