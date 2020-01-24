angular.module('museApp', ['ui.router'])
  .config(MuseRouter);

  MuseRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MuseRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/artists');

    $stateProvider
      .state('artists', {
        url: "/artists",
        templateUrl: "/partials/artists.html",
      })
      .state('artistShow', {
        url: "/artists/{artistId}",
        templateUrl: "/partials/show.html"
      })
      .state('newArtist', {
        url: "/new-artist",
        templateUrl: "/partials/new-artist.html"
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
