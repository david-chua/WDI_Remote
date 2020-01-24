console.log("ROUTER");

angular.module('pinspiration_app', ['ui.router'])
  .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

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
