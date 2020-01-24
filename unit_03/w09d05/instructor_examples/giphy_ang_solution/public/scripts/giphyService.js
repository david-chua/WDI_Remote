angular.module('giphyAngularApp')
  .service('$GiphyService', GiphyService);

GiphyService.$inject = ['$http', '$stateParams'];

function GiphyService($http, $stateParams){
  console.log("$GihpyService ready for action!");

  this.getGif = function() {
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(function(giphyResponse) {
        return giphyResponse.data.data.image_url;
      });
  };

  this.saveGif = function(data){
    return $http.post('/gifs',data )
    .then(function(giphyResponse){
      console.log(giphyResponse.data.data);
      return giphyResponse.data.data;
    });
  }

  this.updateGif = function(data){
    return $http.put(`/gifs/${$stateParams.gifId}`, data )
    .then(function(giphyResponse){
      console.log(giphyResponse.data.gifs);
      return giphyResponse.data.gifs;
    });
  }

  this.deleteGif = function(id){
    $http.delete(`/gifs/${id}`)
  }
}
