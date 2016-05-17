(function() {
  'use strict';

  angular.module('reddit')
    .directive('redditPosts', appDirective);
    console.log("layout directive was called, but didn't go into my controller");

  function appDirective () {
    return {
      restrict: 'E',
      templateUrl: '/posts/posts.directive.html',
      controller: function () {
        console.log("layout directive was called, and went into my controller");
      }
    }
  }
}());
