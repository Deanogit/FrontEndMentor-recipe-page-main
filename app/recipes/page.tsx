import { getAllRecipes } from '../lib/recipes';
import RecipesList from '../components/RecipesList';

export default async function RecipesPage() {
  const res = await getAllRecipes();
  console.log(res);

  return (
    <div className="">
      <h1>Recipes Page</h1>
      <RecipesList />
    </div>
  );
}
