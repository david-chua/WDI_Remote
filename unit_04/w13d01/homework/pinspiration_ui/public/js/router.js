console.log("ROUTER");

angular.module('pinspiration_app', ['ui.router'])
  .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  // This is just an example
  // Create or remove states as you see fit.
  // Create or remove partials in the partials folder as you see fit.
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/partials/boards/index.html'
  })
  .state('boardShow', {
    url: '/boards/{boardId}',
    templateUrl: '/partials/boards/show.html'
  });
}
