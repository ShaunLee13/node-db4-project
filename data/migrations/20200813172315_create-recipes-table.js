
exports.up = function(knex) {
    return knex.schema
    //Base Tables
        .createTable('Ingredients', tbl => {
            tbl.increments('id')

            tbl.string('name', 256).notNullable().unique()
        })
        .createTable('Recipes', tbl => {
            tbl.increments('id')

            tbl.string('name', 256).notNullable().unique()
        })
    //Requires Base
        .createTable('Steps', tbl => {
            tbl.increments('id')

            tbl.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('recipes.id')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.string('step_number', 30).notNullable()
            tbl.string('directions', 256).notNullable()
        })
        .createTable('ingredients_used', tbl => {
            tbl.increments('id')

            tbl.float('quantity')
            .notNullable()

            tbl.integer('ingredient_id')
            .notNullable()
            .unsigned()
            .references('ingredients.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")

            tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('recipes.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients_used')
        .dropTableIfExists('Steps')
        .dropTableIfExists('Recipes')
        .dropTableIfExists('Ingredients')
};
