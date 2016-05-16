(function() {
  'use strict';

  angular.module('app')
    .directive('redditNav', navDirective);

  function navDirective () {
    return {
      restrict: 'E',
      templateUrl: '/app/layout/reddit.nav.directive.html'
    }
  }

}());
