(function() {
  'use strict';

  angular.module('reddit')
    .directive('myLayout', appDirective);

  function appDirective () {
    return {
      restrict: 'E',
      templateUrl: '/layout/layout.directive.html',
      controller: function () {
        console.log("I was called");
      }
    }
  }
}());
