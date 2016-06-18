angular.module('app.directives', [])
  .directive('navbar', [function(){
    return {
      // restrict element
      restrict: 'E',
      // use the navbar template in the partials dir
      templateUrl: 'partials/navbar.html',
      replace: true,
    };
  }]);;
