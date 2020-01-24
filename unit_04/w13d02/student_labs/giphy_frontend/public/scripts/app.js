angular.module('giphyAngularApp')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('GiphyController', GiphyController)
  .factory('AuthTokenFactory', AuthTokenFactory)
  .factory('AuthInterceptor', AuthInterceptor)
  