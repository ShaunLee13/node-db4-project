const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

//getRecipes(): should return a list of all recipes in the database.
//getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
//getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('ingredients_used as u')
        .join('ingredients as i', 'u.ingredient_id', '=', 'i.id')
        .select('u.quantity', 'i.name')
        .where({recipe_id})
}

function getInstructions(recipe_id) {
    return db('instructions')
        .where({recipe_id})
        .orderBy('step_number')
}