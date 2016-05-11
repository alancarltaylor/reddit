exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: 'Joe', password: 'password'}),
    knex('users').insert({id: 2, name: 'Kate', password: 'password'}),
    knex('users').insert({id: 3, name: 'Boomps', password: 'password'})
  );
};
