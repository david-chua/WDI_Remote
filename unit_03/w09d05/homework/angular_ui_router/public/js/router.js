//set up your UI-ROUTER HERE
angular.module('myApp', ['ui.router'])
    .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
        })
        .state('quotes', {
            url: '/quotes',
            templateUrl: 'partials/quotes.html',
            controller: 'quotesController as quotes'
        })
        .state('netflix', {
            url: '/netflix',
            templateUrl: 'partials/netflix.html',
            controller: 'netflixController as netflix'
        })
}
