
exports.seed = function(knex) {
return knex('Steps').insert([
        {
          recipe_id:1,
          step_number:'Step 1',
          directions:'Cook Macaroni'
        },
        {
          recipe_id:1,
          step_number:'Step 2',
          directions:'After Macaroni is drained, melt butter in pot and whisk in flour.'
        },
        {
          recipe_id:1,
          step_number:'Step 3',
          directions:'Add milk and sour cream to the mixture, and whisk until smooth.'
        },
        {
          recipe_id:1,
          step_number:'Step 4',
          directions:'Once thickened, add cheese, whisk until cheese is melted and smooth'
        },
        {
          recipe_id:1,
          step_number:'Step 5',
          directions:'Add noodles back to the cheese sauce and stir. Enjoy!'
        },
        {
          recipe_id:2,
          step_number:'Step 1',
          directions:'Brown ground beef.'
        },
        {
          recipe_id:2,
          step_number:'Step 2',
          directions:'Put ground beef in center of tortilla.'
        },
        {
          recipe_id:2,
          step_number:'Step 3',
          directions:'Add toppings, fold, and enjoy!'
        },
      ]);
};
