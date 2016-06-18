angular.module('app.controllers', [
  'app.directives'
])
.controller('PostController', ['$scope', '$http', function($scope, $http){
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
