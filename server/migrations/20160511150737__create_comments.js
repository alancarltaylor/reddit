exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments('id');
    table.string('comment');
    table.integer('user_id').unsigned().references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
