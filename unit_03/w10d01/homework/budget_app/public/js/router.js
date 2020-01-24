angular.module('budgetApp', ['ui-router'])
  .config(MoneyRouter);

function MoneyRouter($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('credits', {
      url: '/credits',
      templateUrl: 'partials/credits.html',
      controller: 'creditsController as credits'
    })
    .state('expenses', {
      url: '/expenses',
      templateUrl: 'partials/expenses.html',
      controller: 'expensesController as expenses'
    })
    .state('balance', {
      url: '/balance',
      templateUrl: 'partials/balance.html'
    })
}
