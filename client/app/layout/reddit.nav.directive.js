(function() {
  'use strict';

  angular.module('reddit')
    .directive('redditNav', navDirective);

  function navDirective () {
    return {
      restrict: 'E',
      templateUrl: '/layout/reddit.nav.html'
    }
  }

}());
