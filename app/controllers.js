angular.module('app.controllers', [
  'app.directives'
])
.controller('PostController', ['$scope', '$http', function($scope, $http, $localStorage,
    $sessionStorage){
// getting data articles.json file
  $http.get('data/articles.json').success(function(data){
  // populate page with the first ten articles on page load
    var articles = [];
    for (i = 0; i < 10; i++){
      articles.push(data[i]);
    }
    // sending data called "articles" to the post template
    $scope.articles = articles;
  });
}])
.controller('MorePostsController', ['$scope', '$http', function($scope, $http, $localStorage,
    $sessionStorage){
// getting data articles.json file
  $http.get('data/articles.json').success(function(data){
  // populate page with the first ten articles on page load
    var articles = [];
    for (i = 11; i < 21; i++){
      articles.push(data[i]);
    }
    // sending data called "articles" to the post template
    var control = [];
    var load = data.splice(0,10);
    $scope.articles = load;
  });
}])
.controller('SortController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams, $localStorage,
    $sessionStorage){
  // getting data articles.json file
  $http.get('data/articles.json').success(function(data){
  // populate page with the first ten articles on page load
    var articles = [];
    for (i = 0; i < 10; i++){
      articles.push(data[i]);
    }
    var sortedArticles = articles.sort(function(x,y) {
      if ($routeParams.type === 'publish_at'){
        return (new Date (x[$routeParams.type]) - new Date(y[$routeParams.type]))
      } else {
        return x[$routeParams.type] - y[$routeParams.type];
      }
    });
  $scope.articles = sortedArticles;
  });
}])
