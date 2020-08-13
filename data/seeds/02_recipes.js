
exports.seed = function(knex) {
return knex('Recipes').insert([
        {name: 'Mac and Cheese'},
        {name: 'Tacos'},
      ]);
};
