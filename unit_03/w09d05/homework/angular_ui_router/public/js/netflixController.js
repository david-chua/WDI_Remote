angular.module('myApp')
    .controller('netflixController', netflixController)

netflixController.$inject = ['$http'];

function netflixController($http) {
    var self = this;

    self.getPoster = getPoster;

    function getPoster(title) {
        $http
            .get(`http://netflixroulette.net/api/api.php?title=${title}`)
            .then(function(res) {
                self.searchResult = res.data
            })

    }

    self.savePoster = savePoster;

    function savePoster() {
        $http
            .post('/netflix', self.searchResult)
            .then(function(res) {
                console.log(res);
            })
    }

    self.getSaved = getSaved;

    function getSaved() {
        $http
            .get('/netflix')
            .then(function(res) {
                self.savedMovies = res.data;
                console.log(res.data);
            })
    }

    self.deleteMovie = deleteMovie

    function deleteMovie(movie, index) {
        $http
            .delete(`/netflix/${movie._id}`)
            .then(function(res) {
                self.savedMovies.splice(index, 1);
            })
    }
}
