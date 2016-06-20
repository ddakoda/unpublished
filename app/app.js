angular.module('app', [
  'ngRoute',
  'ngStorage',
  'app.controllers'
]).config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    // connecting the template to the controller.
    // this is where to find the data and where to put it afterward
    templateUrl: 'views/post.html',
    controller: 'PostController'
  }).when('/loadmore', { // when someone hits this route, we grab more articles
    templateUrl: 'views/post.html',
    controller: 'MorePostsController'
  }).when('/sort/:type', { // when someone hits this route, we grab more articles
    templateUrl: 'views/post.html',
    controller: 'SortController'
  }).otherwise({
    // will not leave the page! which is good until there's more to nav towards
    redirectTo: '/'
  });
}]);
