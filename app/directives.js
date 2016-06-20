angular.module('app.directives', [])
  .directive('navbar', [function(){
    return {
      // restrict element
      restrict: 'E',
      // use the navbar template in the partials dir
      templateUrl: 'partials/navbar.html',
      replace: true,
    };
  }])
  .directive('new', [function(){
    return {
      restrict: 'E',
      // use the new template in the partials dir
      templateUrl: 'views/new.html',
      replace: true,
      link: function (scope, element, attrs) {
        var button = $('.button');
        button.bind('click', function (event) {
          var elem = $('.container');
          angular.element(elem).append('<div class="row">{{ post.html }}</div>');
        })
      }
    };
  }])
  .directive('footer', [function(){
    return {
      // restrict element
      restrict: 'E',
      // use the footer template in the partials dir
      templateUrl: 'partials/footer.html',
      replace: true,
    };
  }])
