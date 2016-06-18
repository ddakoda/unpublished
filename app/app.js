angular.module('app', [
  'ngRoute',
  'app.controllers'
]).config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    // connecting the template to the controller.
    // this is where to find the data and where to put it afterward
    templateUrl: 'views/post.html',
    controller: 'PostController'
  }).otherwise({
    // will not leave the page! which is good until there's more to nav towards
    redirectTo: '/'
  });
}]);
