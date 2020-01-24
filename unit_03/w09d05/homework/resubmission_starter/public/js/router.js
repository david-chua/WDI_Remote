//set up your UI-ROUTER HERE
// setting up app name and ui router for partials
angular.module('myApp', ['ui.router'])
  .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  //home page with url localhost:3000/ and using the partial file called home
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
  //quotes page with url localhost:3000/quotes and using quotesController as quote as well as partile file for views in partials/quotes.html
    .state('quotes', {
      url: '/quotes',
      templateUrl: 'partials/quotes.html',
      controller: 'quotesController as quotes'
    })
  //netflix page with url localhost:3000/netflix and using netflix controller as well as partial file called netflix.html as its views.
    .state('netflix', {
      url: '/netflix',
      templateUrl: 'partials/netflix.html',
      controller: 'netflixController as netflix'
    })
}
