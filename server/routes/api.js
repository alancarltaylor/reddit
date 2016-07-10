var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({greeting: 'Hello from server'});
});



router.get('/posts', function(req, res, next) {
  const _posts = []
  knex('posts')
  .innerJoin('users','posts.user_id','users.id')
  .select('posts.title','posts.description','posts.votes','posts.image_url','posts.created_at','users.name','posts.id','posts.user_id')
  .then(function(data){
    // console.log('data: ', data);
    data.forEach(function(item){
      _posts.push({
        id:item.id,
        user_id:item.user_id,
        title:item.title,
        description:item.description,
        image_url:item.image_url,
        votes: item.votes,
        username: item.name,
        created_at: item.created_at,
        comments: []
      })
    })
    return knex('comments')
    .innerJoin('users','comments.user_id','users.id')
    .select('users.name','comments.comment','comments.post_id','comments.id','comments.user_id')
  })
  .then(function(dataComments){
    _posts.forEach(function(post){
      dataComments.forEach(function(comment){
        // console.log('comment: ',comment);
        if(post.id === comment.post_id){
          post.comments.push(comment)
        }
      })
    })
    // console.log('posts: ',_posts);
    res.json(_posts)
  })
})

router.post('/votes', (req, res, next) =>{
  var post_id = req.body.id;
  var direction;

  if (req.body.direction === 1){
    direction = 'votes + 1'
  } else if (req.body.direction === -1){
    direction = 'votes - 1'
  }

  var results = {};


  knex('posts')
  .where( {id: post_id} ).first()
  .update('votes', knex.raw(direction))
  .returning('*')
  .then( votes => {
    knex('posts').then(posts => {
      results.posts = posts;
    }).then(function () {
      knex('comments')
         .then(function(comments) {
             results.comments = comments;
             for (var i = 0; i < results.posts.length; i++) {
               results.posts[i].comments = [];
               for (var j = 0; j < results.comments.length; j++) {
                 if (results.posts[i].id === results.comments[j].post_id) results.posts[i].comments.push(results.comments[j])
               }
             }
             delete results.comments;
             res.json(results);
         })
    })
  })
  .catch( err => {
    res.send( {err} )
  });
});

router.post('/comments', function(req, res, next) {
  console.log('req.body', req.body);
  knex('comments')
  .insert(req.body)
  .then(function(comments){
    console.log("comments from api.js: ", comments);
    res.end();
  })

});




// router.get('/posts', function(req, res, next) {
//   return knex('posts')
//   .then(function(data){
//     console.log("data: ", data);
//     res.json(data)
//   })
// });

module.exports = router;
