angular.module('giphyAngularApp')
    .controller('HomeController', HomeController)
    .controller('GiphyController', GiphyController)

    function HomeController($scope, $http) {
    }

    function GiphyController($http, $state, $stateParams, $filter, $GiphyService) {
      var self = this;
      self.savedGifs = [];
      self.name = '';
      self.url = '';

      // getSavedGifs()

      function getSavedGifs() {
        $http.get('/gifs')
          .then(function(response) {
            self.savedGifs = response.data.gifs

            $state.go('savedGifs')
          })
      }

      function getGif() {
      //add some new code here
      $GiphyService.getGif()
          .then(function(giphyResponse) {
            self.gifUrl = giphyResponse;

            $state.go('gif');
          })
      }

      function saveGif(url) {
        $GiphyService.saveGif({url: url, name: self.name})
             .then(function(giphyResponse) {
               console.log(giphyResponse);
               self.savedGifs.push(giphyResponse);

               $state.go('savedGifs')
             })
      }

      function populateFormData(gif) {
        self.url = gif.url
        self.name = gif.name

        $state.go('updateGif', { gifId: gif._id })
       }

      function updateGif() {
      $GiphyService.updateGif({ name: self.name, url: self.url })
          .then(function(giphyResponse) {
            self.savedGifs = giphyResponse;

            self.url = '';
            self.name = '';

            $state.go('savedGifs')
          })
      }

      function deleteGif(id) {
        // $http.delete(`/gifs/${id}`)
        $GiphyService.updateGif(id)
          .then(function(response) {
            self.savedGifs.pop($filter('filter')(self.savedGifs, {_id: id}))
          })
      }


      this.getGif = getGif;
      this.saveGif = saveGif;
      this.updateGif = updateGif;
      this.populateFormData = populateFormData;
      this.getSavedGifs = getSavedGifs;
      this.deleteGif = deleteGif;
    };
