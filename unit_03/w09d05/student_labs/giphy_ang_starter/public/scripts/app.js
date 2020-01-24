  angular.module('giphyAngularApp')
    .controller('HomeController', HomeController)
    .controller('GiphyController', GiphyController)

    function HomeController() {
    }

    function GiphyController($http, $state, $stateParams, $filter, $GiphyService) {
      var self = this;
      self.savedGifs = [];
      self.name= '';
      self.url= '';

      function getGif(){
        $GiphyService.getGif()
        .then(function(giphyResponse){
          console.log(giphyResponse);
          self.gifUrl = giphyResponse;
          //acting as a redirect
          $state.go('gif')
        })
      }

      function saveGif(url) {
        $http.post('/gifs', {url: url, name: self.name} )
          .then(function(giphyResponse) {
            self.savedGifs.push(giphyResponse.data.data);

            $state.go('savedGifs')
          })
      }

      function populateFormData(gif){
        self.url = gif.url;
        self.name = gif.name;


        $state.go('updateGif', {gifId: gif._id})

        }

      function updateGif(){
        $http.put(`/gifs/${self.id}`, { name: self.name, url: self.url } )
        .then(function(giphyResponse) {
          self.savedGifs = giphyResponse.data.gifs;

          self.url = '';
          self.name = '';

          $state.go('savedGifs')
        })
      }

      function getSavedGifs(){
        $http.get('/gifs')
          .then(function(response) {
            self.savedGifs = response.data.gifs

            $state.go('savedGifs')
          })
      }

      function deleteGif(id) {
        $http.delete(`/gifs/${id}`)
          .then(function(response) {
            self.savedGifs.pop($filter('filter')(self.savedGifs, {_id: id}))
          })
      }

      self.getGif = getGif;
      self.saveGif = saveGif;
      self.updateGif = updateGif;
      self.getSavedGifs = getSavedGifs;
      self.deleteGif = deleteGif;
      self.populateFormData = populateFormData;
      //Test Funtion Example
        // function test() {
        //   console.log('test');
           // $http.get
           // save the http resposne tos elf
           // then once that's happened, load the state
        //
        //   $state.go('routingTest')
        // }
        //
        // this.test = test;
    }
