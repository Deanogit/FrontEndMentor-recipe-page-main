import recipes from '@/app/data/recipes.json';
import type { Recipes, Recipe } from '@/app/types/index';

export async function getAllRecipes(): Promise<Recipes> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in links.json for now.
  return recipes;
}

export async function getRecipeById(id: string | number): Promise<Recipe> {
  // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
  const foundRecipe = recipes.find(
    (recipe: Recipe) => recipe.id.toString() === id.toString()
  );
  if (!foundRecipe) {
    throw new Error(`Recipe with id ${id} not found`);
  }
  return foundRecipe;
}
