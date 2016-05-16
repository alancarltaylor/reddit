(function() {
  'use strict';

  angular.module('reddit')
    .directive('app', appDirective);

  function appDirective () {
    return {
      restrict: 'E',
      templateUrl: '/app/layout/layout.directive.html',
      controller: function () {
        console.log("I was called");
      }
    }
  }
}());
