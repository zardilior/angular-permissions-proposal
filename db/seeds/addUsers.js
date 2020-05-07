const { USERS } = require('../databaseNames')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(USERS).del()
    .then(function () {
      // Inserts seed entries
      return knex(USERS).insert([
        {id: 1, nombre_mostrable:'Usuario1'},
      ]);
    });
};
