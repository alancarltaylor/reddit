exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({id: 1, comment: 'YASSS, QUEEN!', user_id: 1}),
    knex('comments').insert({id: 2, comment: 'cool', user_id: 3}),
    knex('comments').insert({id: 3, comment: 'I knew that already', user_id: 2})
  );
};
