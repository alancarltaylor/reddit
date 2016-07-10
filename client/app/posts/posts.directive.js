(function() {
  'use strict';

  angular.module('reddit')
    .directive('redditPosts', appDirective);

  function appDirective () {
    return {
      restrict: 'E',
      templateUrl: '/posts/posts.directive.html',
      controller: ['$scope', 'postService', '$log', function ($scope, postService, $log) {
        postService.all().then(function (posts) {
          console.log(posts);
        $scope.posts = posts;
      });
      $scope.voteChange = function(post, direction) {
        post.votes += direction;
        $log.info('vote thing clicked, direction is: ', direction);
        postService.changeVotes(post.id, direction).then(function(results){
        })
      };
      $scope.addComment = function (newComment) {
      console.log('newComment', newComment);
      postService.addComment(newComment).then(function(response){
        $log.info('response from comment post: ',response)
      })
    }
      }]
    }
  }
}());
