angular.module('reddit').factory('postService', function($http, $log) {

  return {
    all: function() {
      return $http.get('http://localhost:4000/api/v1/posts').then(function(res){
        return res.data;
      })
      .catch(function(err){
        console.log('err in factory', err);
      })
    },

    changeVotes: function(id, direction){
      var id = {id: id}
      id.direction = direction;
      $log.info("direction from the service: ", direction)

      return $http.post('http://localhost:4000/api/v1/votes', id).then(function(response){
        $log.info("response after post: ", response);
        this.posts = response.data.posts
        return this.posts;
      })

    },

    addComment: function(comment) {
      console.log('comment', comment);
      return $http.post('http://localhost:4000/api/v1/comments', comment)
       .then(function(response){
         $log.info("response after posting comment: ", response.data)
         return response.data
       })
    }
    // getPost: function (postId) {
    //   return $http.get('/api/posts/' + postId);
    // },
    // addPost: function (newPostData) {
    //   return $http.post('/api/posts/add', newPostData);
    // },
    // deletePost: function (postId) {
    //   return $http.delete('/api/posts/delete/' + postId);
    // },
    // editPost: function (post){
    //   return $http.put('/api/post/edit/' + post.id, post)
    // },

  }
});
