
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'lbs of macaroni'},
        {name: 'tbs of butter'},
        {name: 'tbs of flour'},
        {name: 'cup milk'},
        {name: 'cup of sour cream'},
        {name: 'cups of cheese'},
        {name: 'tortilla'},
        {name: 'cups of lettuce, chopped'},
        {name: 'tomatoes'},
        {name: 'lbs of ground beef'}
      ]);
    });
};
