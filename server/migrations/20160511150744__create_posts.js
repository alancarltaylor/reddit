exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments('id');
    table.string('image_url');
    table.string('description');
    table.integer('votes')
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('comment_id').unsigned().references('id').inTable('comments');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
