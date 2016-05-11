exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({id: 1, image_url: 'http://wawart.com/wp-content/uploads/2014/08/sad-clown.jpg', description: 'I met prince once', votes: -3, user_id: 3, comment_id: 1}),
    knex('posts').insert({id: 2, image_url: 'http://images.fineartamerica.com/images-medium-large-5/sad-clown-luiza-turcan.jpg', description: 'did you hear the one about the dying whale?', votes: 3, user_id: 2, comment_id: 2}),
    knex('posts').insert({id: 3, image_url: 'https://s-media-cache-ak0.pinimg.com/236x/83/30/eb/8330eba0502eafcf1b0276682ca58e8d.jpg', description: 'REMEMBER THE ALAMO!', votes: 0, user_id: 1, comment_id: 3})
  );
};
