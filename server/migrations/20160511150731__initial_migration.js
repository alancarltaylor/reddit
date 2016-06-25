exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('name');
    table.string('email').notNullable();
    table.string('password').notNullable();
  })
  .createTable('posts', function(table){
    table.increments('id');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade');
    table.string('title');
    table.text('description');
    table.string('image_url');
    table.integer('votes');
    table.boolean('favorite');
    table.boolean('showComments');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
  .createTable('comments', function(table){
    table.increments('id');
    table.text('comment');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade');
    table.integer('post_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
  .dropTable('posts')
  .dropTable('comments')
};
